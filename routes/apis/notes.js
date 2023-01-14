
const { Router } = require('express');
const fs = require('fs');
const path = require('path');
const uuid = require('uuid');
const notesRouter = new Router();


const filePath = path.join(__dirname, '../../db/db.json');


notesRouter.get('/', (req, res) => {
  //console.log("filepath targeted:", filePath);
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error reading db file');
    }
    let db = JSON.parse(data);
    res.json(db);
    //console.log(res);
  });

})


notesRouter.post("/", async (req, res) => {
  const newNote = req.body;
  newNote.id = uuid.v4();
  fs.readFile(filePath, (err, data) => {
    if (err) throw err;
    const notes  = JSON.parse(data);
    notes.push(newNote);
    fs.writeFile(filePath, JSON.stringify(notes), (err) => {
      if (err) throw err;
      res.send('Data saved to db.json file.');
    });
  });
})

notesRouter.delete('/:id', (req, res) => {
  const id = req.params.id;
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;
    let notes = JSON.parse(data);
    notes = notes.filter(note => note.id !== id);
    fs.writeFile(filePath, JSON.stringify(notes), (err) => {
      if (err) throw err;
      res.status(200).json({ message: 'Note deleted' });
    });
  });
});

module.exports = notesRouter;