console.log('Starting movies.js for movies');

const fs = require('fs');

var addMovie = (title,description) => {
  var movies = [];
  var movie = {
    title,
    description
  };

  try{
    var moviesString = fs.readFileSync('movies-list.json');
    movies = JSON.parse(moviesString);
  }catch(error){

  }

  var duplicateMovies = movies.filter((movie) => movie.title === title);

  if(duplicateMovies.length === 0){
    movies.push(movie);
    fs.writeFileSync('movies-list.json', JSON.stringify(movies));
  }
};

var getMovies = () => {
  console.log('Retrieving all movies');
};

var removeMovie = (title) => {
  console.log('Removing movie with title ' + title);
};

var getMovie = (title) => {
  console.log('Getting movie with title ' + title);
};



//es6 object property and value are identical
module.exports = {
  addMovie,
  getMovies,
  removeMovie,
  getMovie
};
