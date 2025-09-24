const request = require('supertest');
const app = require('../src/app');

describe('Security Tests', () => {
  describe('Authentication Security', () => {
    test('should reject login with SQL injection', async () => {
      const response = await request(app)
        .post('/auth/login')
        .send({
          username: "admin' OR '1'='1",
          password: "anything"
        });
      
      expect(response.status).toBe(401);
    });

    test('should reject login with XSS payload', async () => {
      const response = await request(app)
        .post('/auth/login')
        .send({
          username: "<script>alert('xss')</script>",
          password: "password"
        });
      
      expect(response.status).toBe(401);
    });

    test('should require authentication for protected routes', async () => {
      const response = await request(app)
        .get('/api/users');
      
      expect(response.status).toBe(401);
    });
  });

  describe('Rate Limiting', () => {
    test('should enforce rate limiting', async () => {
      const promises = [];
      for (let i = 0; i < 150; i++) {
        promises.push(request(app).get('/health'));
      }
      
      const responses = await Promise.all(promises);
      const rateLimitedResponses = responses.filter(r => r.status === 429);
      
      expect(rateLimitedResponses.length).toBeGreaterThan(0);
    });
  });

  describe('Input Validation', () => {
    test('should validate required fields', async () => {
      const response = await request(app)
        .post('/auth/login')
        .send({});
      
      expect(response.status).toBe(400);
    });

    test('should reject malformed JSON', async () => {
      const response = await request(app)
        .post('/auth/login')
        .set('Content-Type', 'application/json')
        .send('{"invalid": json}');
      
      expect(response.status).toBe(400);
    });
  });

  describe('Security Headers', () => {
    test('should include security headers', async () => {
      const response = await request(app)
        .get('/health');
      
      expect(response.headers['x-content-type-options']).toBe('nosniff');
      expect(response.headers['x-frame-options']).toBe('DENY');
      expect(response.headers['x-xss-protection']).toBe('0');
    });
  });
});
