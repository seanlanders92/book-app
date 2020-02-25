'use strict'

require('dotenv').config();
const express = require('express');
const app = express();
const superagent = require('superagent');
const PORT = process.env.PORT || 3001;


// turn on the server
client.connect()
  .then(
    app.listen(PORT, () => {
      console.log(`listening to ${PORT}`);
    }))