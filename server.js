'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const superagent = require('superagent');
require('ejs');
require('pg');

const methodOveride = require('meth-overide')

const client = new pg.Client(process.env.DATABASE_URL);
client.on('error', err => console.error(err));


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
app.get('/searches/new', newSearch)
app.get('searches/new', )

function renderHomePage(request, response){

  response.render('./index.ejs');
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
}





// turn on the server
client.connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`listening to ${PORT}`);
  });
});
