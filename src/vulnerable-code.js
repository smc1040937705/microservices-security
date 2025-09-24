// 故意包含安全漏洞的测试文件

// 1. SQL注入漏洞示例
function getUserData(userId) {
    // 不安全的SQL拼接
    const query = `SELECT * FROM users WHERE id = '${userId}'`;
    return db.query(query);
}

// 2. 硬编码的API密钥（测试用虚构密钥）
const API_KEY = 'test_sk_1234567890abcdefghijklmnopqrstuvwxyz';

// 3. 不安全的CORS设置
app.use(cors({
    origin: '*', // 过于宽松的CORS设置
    credentials: true
}));

// 4. 使用过时的加密库
const crypto = require('md5'); // 不安全的哈希算法

function hashPassword(password) {
    return crypto(password); // 应该使用bcrypt或argon2
}

// 5. 不安全的文件上传
function uploadFile(file) {
    // 没有文件类型验证
    fs.writeFileSync(`/uploads/${file.name}`, file.data);
}

module.exports = {
    getUserData,
    hashPassword,
    uploadFile,
    API_KEY
};