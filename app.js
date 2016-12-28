console.log('Starting app.js for movies');
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const movies = require('./movies.js');

const argv = yargs.argv;
var userInput = argv._[0];


if(userInput === 'add') {
  var movie = movies.addMovie(argv.title,argv.description);
  if(movie){
    console.log('Movie added');
    movies.logMovie(movie);
  }else{
    console.log("A duplicate movie name already exists");
  }
}else if (userInput === 'list') {
  movies.getMovies();
}else if (userInput === 'view') {
  var movie = movies.getMovie(argv.title);
  if(movie){
    console.log('Movie found');
    movies.logMovie(movie);
  }else{
    console.log('Movie not found');
  }
}else if (userInput === 'remove'){
  var movieRemoved = movies.removeMovie(argv.title);
  var message = movieRemoved ? 'The movie was removed' : 'The movie was not found';
  console.log(message);
}else{
  console.log('User input not found');
}
