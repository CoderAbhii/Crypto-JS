const crypto = require('crypto');

const plainText = "Hello World"
const crypted = crypto.createHash("sha256").update(plainText).digest("hex");
console.log(crypted);