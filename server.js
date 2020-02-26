'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const pg = require('pg');
const superagent = require('superagent');
require('ejs');
const PORT = process.env.PORT || 3001;

// tells express to use the ejs templating view engine
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static('./public'));

const client = new pg.Client(process.env.DATABASE_URL);
client.on('error', err => console.error(err));

app.get('/', renderHomePage);
app.get('/searches/new', newSearch)
function renderHomePage(request, response){

  response.render('./index.ejs');
}
function newSearch(request, response){
  response.render('./pages/searches/new.ejs');
}





// turn on the server
app.listen(PORT, () => {
  console.log(`listening to ${PORT}`);
});
