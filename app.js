//https://github.com/MichaelRandall/movies
console.log('Starting app.js for movies');

const movies = require('./movies.js');

var movie = movies.addMovie('Movie Title');
console.log(movie);
