const { Router } = require("express");

const pathRouter = new Router();
const path = require('path');

pathRouter.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

pathRouter.get("/notes", (req,res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

module.exports =pathRouter;