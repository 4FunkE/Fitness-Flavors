const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Authentication route to generate a token
router.post('/authenticate', async (req, res) => {
  const { username, password } = req.body;

  // Check if username and password are valid
  const isValidUser = validateUser(username, password); // Replace with your validation logic

  if (isValidUser) {
    // Generate a token
    const token = jwt.sign({ username }, secret, { expiresIn: expiration });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Authentication failed' });
  }
});

// Protected route
router.get('/protected-resource', (req, res) => {
  // Authenticate the request using middleware or manually check the token
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, secret);
    // You can now access decoded.username to identify the user

    // Respond with the protected resource
    res.json({ message: 'Protected resource data' });
  } catch (error) {
    res.status(401).json({ message: 'Token verification failed' });
  }
});

module.exports = router;