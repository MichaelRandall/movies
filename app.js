console.log('Starting app.js for movies');
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const movies = require('./movies.js');

const argv = yargs.argv;
var userInput = argv._[0];


if(userInput === 'add') {
  movies.addMovie(argv.title,argv.description);
}else if (userInput === 'list') {
  movies.getMovies();
}else if (userInput === 'view') {
  movies.getMovie(argv.title);
}else if (userInput === 'remove'){
  movies.removeMovie(argv.title);
}else{
  console.log('User input not found');
}
