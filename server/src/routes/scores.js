'use strict';

const express = require('express');
const scoreRouter = express.Router();

let scores = [
  {_id: '1', name: 'foo', value: 5},
  {_id: '2', name: 'bar', value: 10},
  {_id: '3', name: 'lamp', value: 50000000},
  {_id: '4', name: 'American Cheese', value: 50590 },
  {_id: '5', name: 'Watermellon', value: 5},
  {_id: '6', name: 'Kali', value: 90249},
  {_id: '7', name: 'Bart', value: 23490},
  {_id: '8', name: 'Iodine', value: 234233},
  {_id: '9', name: 'Elf', value: 949},
];
console.log(scores);


scoreRouter.post('/scores/', (request, response) => {
const _id = request.params._id;
const name = request.scores.name;
const value = request.scores.value;
request.scores.set(_id, name, value);
request.scores.save();
response.json({});

});

scoreRouter.get('/scores', (request, response) => {
  response.status(200).json(scores);

});

scoreRouter.put('/scores/:id', (request, response) => {
  const _id = request.body._id;
  const name = request.body.name;
  const value = request.body.value;
  request.scores.set(_id, name, value);
  request.scores.save();
  response.json({});
});

scoreRouter.delete('/scores/:id', (request, response) => {
 scores = scores.filter(score => score._id !== request.params.id);
  response.status(200).json(scores);
});

module.exports = scoreRouter;
