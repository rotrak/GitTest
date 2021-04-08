const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;
app.use(require('./routes/login.js'));
app.use(require('./routes/data.js'));

app.listen(port,() => {
  console.log("Server up.");
});
