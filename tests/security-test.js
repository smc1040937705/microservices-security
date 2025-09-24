// 安全测试文件

const vulnerableCode = require('../src/vulnerable-code');

// 测试SQL注入检测
function testSqlInjection() {
    const maliciousInput = "1' OR '1'='1";
    console.log("Testing SQL injection:", maliciousInput);
    return vulnerableCode.getUserData(maliciousInput);
}

// 测试密钥泄露检测
function testSecretExposure() {
    console.log("API Key found:", vulnerableCode.API_KEY);
    return vulnerableCode.API_KEY.length > 0;
}

// 测试弱加密检测
function testWeakEncryption() {
    const password = "password123";
    const hashed = vulnerableCode.hashPassword(password);
    console.log("Weak hash generated:", hashed);
    return hashed.length === 32; // MD5 hash length
}

module.exports = {
    testSqlInjection,
    testSecretExposure,
    testWeakEncryption
};