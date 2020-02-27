'use strict';

const client = require('./client');
const superagent = require('superagent');
const Book = require('./book');

const handleSearch = (request, response) => {
  let searchTerm = request.body.search[0];
  let searchType = request.body.search[1];
  let url = `https://www.googleapis.com/books/v1/volumes?q=+in${searchType}:${searchTerm}`;
  superagent.get(url).then(results => {
    let resArr = results.body.items;
    let booksArr = resArr.map(book => {
      console.log(book.volumeInfo);
      return new Book(book);
    });
    response.render('./pages/searches/show.ejs', {searchResults: booksArr});
  }).catch(error => {
    Error(error, response);
  });
};

module.exports = handleSearch;
