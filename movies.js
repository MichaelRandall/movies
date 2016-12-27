console.log('Starting movies.js for movies');

var addMovie = (title,description) => {
  //console.log('You have added a movie');
  console.log('Adding movie', title, description);
  //return 'You are adding a movie';
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
