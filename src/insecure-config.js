// 不安全的配置示例

// 1. 过于宽松的CORS配置
const corsConfig = {
    origin: '*', // 允许所有来源
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['*'],
    credentials: true
};

// 2. 弱密码策略
const passwordPolicy = {
    minLength: 4, // 太短
    requireUppercase: false,
    requireNumbers: false,
    requireSpecialChars: false
};

// 3. 不安全的会话配置
const sessionConfig = {
    secret: 'weak-secret-key', // 弱密钥
    resave: false,
    saveUninitialized: true, // 不安全
    cookie: {
        secure: false, // 非HTTPS
        httpOnly: false, // 允许JavaScript访问
        maxAge: 24 * 60 * 60 * 1000 // 24小时
    }
};

// 4. 不安全的文件上传配置
const uploadConfig = {
    dest: '/tmp/uploads',
    limits: {
        fileSize: 50 * 1024 * 1024, // 50MB - 过大
        files: 10 // 允许过多文件
    },
    fileFilter: null // 无文件类型过滤
};

module.exports = {
    corsConfig,
    passwordPolicy,
    sessionConfig,
    uploadConfig
};