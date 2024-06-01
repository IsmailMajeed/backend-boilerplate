const jwt = require('jsonwebtoken');

function validateUser(req, res, next) {
  const token = req.headers['x-access-token'];

  if (!token) {
    return res.status(401).json({ 'Status': "Authorization", message: "Token not provided" });
  }

  jwt.verify(token, req.app.get('secretKey'), function (err, decoded) {
    if (err) {
      return res.status(401).json({ 'Status': "Authorization", message: err.message });
    } else {
      next();
    }
  });
}

module.exports = validateUser;