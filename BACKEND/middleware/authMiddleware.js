const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.authenticateToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
};

exports.extractBranchFromCookies = (req, res, next) => {
  const branch = req.cookies.branch;
  if (!branch) {
    return res.status(400).json({ message: 'Branch information is missing' });
  }
  req.branch = branch;
  next();
};