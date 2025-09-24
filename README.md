# Microservices Security API

A secure microservices backend API with authentication, authorization, and comprehensive security features.

## Features

- **Authentication**: JWT-based authentication with bcrypt password hashing
- **Authorization**: Role-based access control
- **Security Headers**: Helmet.js for security headers
- **Rate Limiting**: Express rate limiting to prevent abuse
- **CORS**: Configurable CORS settings
- **Logging**: Winston logging with file and console outputs
- **Database**: MySQL with connection pooling
- **Caching**: Redis for session and data caching

## Security Features

- Password hashing with bcrypt
- JWT token authentication
- SQL injection protection (parameterized queries)
- XSS protection via helmet
- CSRF protection
- Rate limiting
- Input validation
- Secure headers

## Installation

```bash
npm install
```

## Configuration

Copy `env.example` to `.env` and configure your environment variables:

```bash
cp env.example .env
```

## Running the Application

```bash
# Development
npm run dev

# Production
npm start
```

## Testing

```bash
# Run tests
npm test

# Run linting
npm run lint

# Security scan
npm run security-scan
```

## API Endpoints

### Authentication
- `POST /auth/login` - User login
- `GET /health` - Health check

### Users
- `GET /api/users` - Get all users (authenticated)
- `POST /api/users` - Create new user (authenticated)

## Security Considerations

- All passwords are hashed using bcrypt
- JWT tokens have expiration times
- Database queries use parameterized statements
- Rate limiting prevents brute force attacks
- CORS is properly configured
- Security headers are set via Helmet

## Dependencies

- **express**: Web framework
- **jsonwebtoken**: JWT authentication
- **bcryptjs**: Password hashing
- **helmet**: Security headers
- **cors**: Cross-origin resource sharing
- **express-rate-limit**: Rate limiting
- **mysql2**: MySQL database driver
- **redis**: Redis client
- **winston**: Logging

## Development

This project includes comprehensive security scanning and testing capabilities:

- **Dependency Scanning**: npm audit for vulnerable dependencies
- **Code Security**: ESLint security rules
- **Secret Detection**: Pre-commit hooks for secret scanning
- **Vulnerability Assessment**: Snyk integration for vulnerability scanning

## License

MIT
