const crypto = require('crypto');

const randomId = crypto.randomBytes(8).toString('hex');

console.log(randomId);