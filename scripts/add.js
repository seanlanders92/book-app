'use strict'
const client = require('./client')

function addBook(request, response){
  
    let {title, author, isbn, image_url, description, bookshelf} = request.body;
  
    let sql = 'INSERT INTO books (title, author, isbn, image_url, description, bookshelf) VALUES ($1, $2, $3, $4, $5, $6);';
  
    let safeValues = [title, author, isbn, image_url, description, bookshelf];
  
    client.query(sql, safeValues)
      .then(() => {
        response.redirect('/');
      })
  
  
  }
  module.exports = addBook;
