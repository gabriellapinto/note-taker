const express = require('express');
const router = express.Router();

const app = express();

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

module.exports = router;