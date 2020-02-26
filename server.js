'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
require('ejs');
const PORT = process.env.PORT || 3001;

const handleSearch = require('./scripts/handleSearch');

// tells express to use the ejs templating view engine
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static('./public'));

app.get('/', renderHomePage);
app.get('/searches/new', newSearch)
app.get('/searches', newSearch);
app.post('/searches', (request, response) => {
  handleSearch(request, response);
});

function renderHomePage(request, response){
  response.render('./index.ejs');


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




function Error(error, response){
  console.error(error);
  return response.status(500).send('ya done f**kd up A A Ron.')
}

// turn on the server
client.connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`listening on ${PORT}`);
    })
  })
