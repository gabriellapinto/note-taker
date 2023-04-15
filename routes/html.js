// Imports express, router, and path
const express = require('express');
const router = express.Router();
const path = require('path');

// Gets the homepage and displays it
router.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

// Gets everything and displays it
router.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

// Gets the notes page and displays it
router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// Exports router to be used on a different page
module.exports = router;