// Imports express, router, uuid, and fs
const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

// Gets all notes that have been made
router.get('/notes', async (req, res) => {
    const dbJson = await JSON.parse(fs.readFileSync('/db/db.json', 'utf8'));
    res.json(dbJson);
});

// Posts all note data into a new note object
router.post('/notes', (req, res) => {
    const dbJson = JSON.parse(fs.readFileSync('/db/db.json', 'utf8'));

    // New note object
    const newNote = {
        id: uuidv4(),
        title: req.body.title,
        text: req.body.text
    };

    // Pushes the data into the new note object and shows it to the page
    dbJson.push(newNote);
    fs.writeFileSync('db/db.json', JSON.stringify(dbJson));
    res.json(dbJson);
});

// router.delete('/notes/:id', (req, res) => {
//     fs.writeFileSync(path.join(__dirname, './db/db.json'),
//         JSON.stringify(notesArray, null, 2)
//     );
// })

// Exports router to be used on a different page
module.exports = router;