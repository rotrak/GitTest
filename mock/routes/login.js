const express = require('express');

const app = express();

app.post('/api/login', (req, res) => {
  if (req.body.username === 'user1' && req.body.password === 'user1') {
    setTimeout(() => {
      res.status(200).json({
        message: 'success'
      })
    }, 2000);
    
  } else {
    res.status(400).json({
      message: 'error'
    })
  }
});

module.exports = app;