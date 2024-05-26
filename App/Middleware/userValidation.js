function validateUser(req, res, next) {
  jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function (err, decoded) {
    if (err) {
      res.json({ 'Status': "Authorization", message: err.message })
    }
    else {
      next()
    }
  })
}

module.exports = validateUser;