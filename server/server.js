const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// console.log('configuring env');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5003;


app.use(express.static(path.resolve(__dirname, '../client/build'));

// console.log('connecting to mongoose');
mongoose.connect(process.env.MONGODB_URI);

app.use((req,res,next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));

// console.log('configuring routes');
app.use(require("./api_routes.js"));

// All remaining requests return the React app, so it can handle routing.
// app.get('*', function(request, response) {
//   response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
// });

app.listen(port, function(){
  console.log('listening on port', port);
});

module.exports = port;
