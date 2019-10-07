'use strict';


const express = require('express');
const cors = require('cors');


const app = express();


const scoreRouter = require('./routes/scores');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(scoreRouter);


module.exports = {
  server: app,
  start: port => {
    let PORT = port || 8080;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};
