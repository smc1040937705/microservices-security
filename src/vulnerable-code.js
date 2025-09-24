// This file contains intentional security vulnerabilities for testing purposes

// 1. Dependency vulnerability - using outdated vulnerable library
const vulnerableLib = require('lodash@4.17.15'); // Known vulnerabilities in this version

// 2. SQL Injection vulnerability
function getUserData(username) {
  // UNSAFE: Direct string concatenation
  const query = `SELECT * FROM users WHERE username = '${username}'`;
  return db.query(query);
}

// 3. Hardcoded API key
const API_KEY = 'sk_test_51JqXwX2eZvXJqXwX2eZvXJqXwX2eZvXJqXwX2eZvXJqXwX2eZvXJqXwX2eZvX';

// 4. Insecure CORS configuration
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Too permissive
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// 5. Command injection vulnerability
function executeCommand(userInput) {
  // UNSAFE: Direct execution of user input
  return require('child_process').execSync(`ls ${userInput}`);
}

// 6. XSS vulnerability
function displayUserContent(content) {
  // UNSAFE: Direct HTML injection
  document.getElementById('content').innerHTML = content;
}

// 7. Insecure random number generation
function generateToken() {
  return Math.random().toString(36); // Not cryptographically secure
}

// 8. Hardcoded database credentials
const dbConfig = {
  host: 'localhost',
  user: 'admin',
  password: 'SuperSecret123!',
  database: 'microservices'
};

module.exports = {
  getUserData,
  executeCommand,
  displayUserContent,
  generateToken,
  dbConfig
};