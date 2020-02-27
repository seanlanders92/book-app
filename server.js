'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const superagent = require('superagent');
require('ejs');
require('pg');

const methodOveride = require('meth-overide')
const client = require('./scripts/client');
const PORT = process.env.PORT || 3001;

// tells express to use the ejs templating view engine
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static('./public'));
app.set('view engine', 'pg');
app.use(express.urlencoded({extended:true}));
app.use(methodOveride9('_method));


app.get('/books/:book_id', displayOneBook);
app.get('/', renderHomePage);

// app.get('/searches/new', newSearch);
app.get('/searches', newSearch);
app.post('/searches', handleSearch);

function renderHomePage(request, response){
  console.log('hello');

  let SQL = 'SELECT * FROM books';

  client.query(SQL)
    .then(results =>{
      let books = results.rows;
      let bookNumber = books.length;
      console.log(bookNumber);
      response.render('./index.ejs', {bookArray: books, bookNumber});
    })
    .catch(error =>{
      Error(error, response);
    });
}

function newSearch(request, response){
  response.render('./pages/searches/new.ejs');
}

function displayOneBook(request,response){
  // get parrams
  // goto DB with the ID - find the book
  // display the details
  let id = request.params.book_id;
  let sql = 'SELECT * FROM books WHERE id=$1';
  let safeValues = [id];

  function displaySearchPage (request,response){
  //Display search page
  response.render('./add-view.ejs');
  }


  client.query(sql,safeValues)
    .then(results => {
      response.render('./detail.ejs',{bananas: results.rows});
    });

function Error(error, response){
  console.error(error);
  return response.status(500).send('ya done f**kd up A A Ron.');
}





// turn on the server
client.connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`listening on ${PORT}`);
    });
  });
