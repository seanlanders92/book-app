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
app.get('/searches', newSearch);
app.post('/searches', (request, response) => {
  handleSearch(request, response);
});

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
