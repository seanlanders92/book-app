'use strict';

const client = require('./client');
const superagent = require('superagent');
const Book = require('./book');

const handleSearch = (request, response) => {
  let searchTerm = request.body.search[0];
  let searchType = request.body.search[1];
  let url = `https://www.googleapis.com/books/v1/volumes?q=+in${searchType}:${searchType}`;
  superagent.get(url).then(results => {
    let resArr = results.body.items;
    let searchResults = resArr.map(book => {
      new Book(book);
    });
    console.log(searchResults);
    response.render('./pages/searches/show.ejs', {searchResults: searchResults});
  });
};

module.exports = handleSearch;
