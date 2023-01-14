
const {Router} = require('express');
const fs = require('fs');
const path = require('path');
const notesRouter = new Router();


const filePath = path.join(__dirname,'../../db/db.json');


notesRouter.get('/', (req,res) => {
  console.log("filepath targeted:",filePath);
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return res.status(500).send('Error reading db file');
        }
        let db = JSON.parse(data);
        res.json(db);
        console.log(res);
      });
    
})


module.exports = notesRouter;