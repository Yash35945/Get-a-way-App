const crypto = require('crypto');

// Generate a 32-byte (256-bit) random key
const secretKey = crypto.randomBytes(32).toString('base64');

console.log(secretKey);
