const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5003;
const dbConnection = process.env.MONGODB_URI || 'mongodb://localhost:27017/myapp';

app.use(express.static(path.resolve(__dirname, '../client/build', 'index.html')));

mongoose.createConnection(dbConnection, { useNewUrlParser: true });

app.use((req,res,next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use(require("./api_routes.js"));

app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(port, function(){
  console.log('listening on port', port);
});

module.exports = port;
