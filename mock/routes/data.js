const express = require('express');

const app = express();

app.get('/api/data', (req, res) => {
    setTimeout(() => {
      res.status(200).json([
        {
          name: 'Manuel',
          age: 24
        },
        {
          name: 'Roberto',
          age: 23
        },
        {
          name: 'Pepelu',
          age: 20
        }
      ])
    }, 2000);
});

module.exports = app;