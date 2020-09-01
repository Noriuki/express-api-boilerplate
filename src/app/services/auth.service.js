const config = require('../../config/default');
const jwt = require('jsonwebtoken');
const secret = config.session.secret;

module.exports = {
  authenticateToken: (token, callback) => { return jwt.verify(token, secret, callback) },
  generateToken: (payload) => { return jwt.sign(payload, secret, {expiresIn: config.session.expiresIn}) }
}