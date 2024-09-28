const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.authenticateToken = (req, res, next) => {
  // Get the Authorization header from the request
  const authHeader = req.headers['authorization']; 

  // The token is usually in the format "Bearer <token>", so we split it
  const token = authHeader && authHeader.split(' ')[1];
  console.log("authenticateToken token is ",JSON.stringify(token));

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