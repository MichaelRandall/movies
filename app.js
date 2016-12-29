const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const movies = require('./movies.js');

const titleOptions = {
  describe: 'Title of movie',
  demand: true,
  alias: 't'
};
const argv = yargs
  .command('add', 'Add a new movie to the list',{
    title: titleOptions,
    description: {
      describe: 'Your thoughts about the movie',
      demand: true,
      alias: 'd'
    }
  })
  .command('list', 'View details for all movies in the list')
  .command('view', 'View details for a specific movie', {
    title: titleOptions,
  })
  .command('remove', 'Remove a specific movie from the list', {
    title: titleOptions
  })
  .help()
  .argv;
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
  var moviesList = movies.getMovies();
  console.log(`The movie list contains ${moviesList.length} titles`);
  moviesList.forEach((movie) => movies.logMovie(movie));
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
