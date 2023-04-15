const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

router.get('/notes', async (req, res) => {
    const dbJson = await JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    res.json(dbJson);
});


router.post('/notes', (req, res) => {
    const dbJson = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

    const newNote = {
        id: uuidv4(),
        title: req.body.title,
        text: req.body.text
    };

    dbJson.push(newNote);
    fs.writeFileSync('db/db.json', JSON.stringify(dbJson));
    res.json(dbJson);
});

// router.delete('/notes/:id', (req, res) => {
//     fs.writeFileSync(path.join(__dirname, './db/db.json'),
//         JSON.stringify(notesArray, null, 2)
//     );
// })

module.exports = router;