console.log('Starting movies.js for movies');

const fs = require('fs');

var fetchMovies = () => {
  try{
    var moviesString = fs.readFileSync('movies-list.json');
    return JSON.parse(moviesString);
  }catch(error){
    return [];
  }
};

var saveMovies = (movies) => {
  fs.writeFileSync('movies-list.json', JSON.stringify(movies));
};

var addMovie = (title,description) => {
  var movies = fetchMovies();
  var movie = {
    title,
    description
  };
  var duplicateMovies = movies.filter((movie) => movie.title === title);

  if(duplicateMovies.length === 0){
    movies.push(movie);
    saveMovies(movies);
    return movie;
  }
};

var getMovies = () => {
  console.log('Retrieving all movies');
};

var removeMovie = (title) => {
  console.log('Removing movie with title ' + title);
  var movies = fetchMovies();
  var filteredMovies = movies.filter((movie) => movie.title !== title);
  saveMovies(filteredMovies);

  return movies.length !== filteredMovies.length;
};

var getMovie = (title) => {
  var movies = fetchMovies();
  var filteredMovies = movies.filter((movie) => movie.title === title);
  return filteredMovies[0];
};

var logMovie = (movie) => {
  console.log('---');
  console.log(`Title: ${movie.title}`);
  console.log(`Description: ${movie.description}`);
}


//in es6 if object property and value are identical, specify as below
module.exports = {
  addMovie,
  getMovies,
  removeMovie,
  getMovie,
  logMovie
};
