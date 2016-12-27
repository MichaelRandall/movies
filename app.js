console.log('Starting app.js for movies');
//const fs = require('fs');
const _ = require('lodash');

const movies = require('./movies.js');

var userInput = process.argv[2];
console.log('User input: ', userInput);

if(userInput === 'add') {
  console.log('Adding a movie to the list');
}else if (userInput === 'list') {
  console.log('Displaying all movies in the list');
}else if (userInput === 'read') {
  console.log('Displaying a specific movie from the list');
}else if (userInput === 'remove'){
  console.log('Removing a specific movie from the list');
}else{
  console.log('User input not found');
}
