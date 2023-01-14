const express = require('express');



const PORT = process.env.PORT || 3001;

const mainRouter = require('./routes');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(mainRouter);
app.use(express.static('public'));



app.listen(PORT, () => 
    console.log(`listening on http://localhost:${PORT}`)
);