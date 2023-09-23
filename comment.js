// Create a web server
// To run: node comment.js
// To test: curl http://localhost:3000

// Load the express module
var express = require('express');

// Create a new web server
var app = express();

// Define a route for the root
app.get('/', function(req, res) {
  res.send('Hello World');
});

// Define a route for the comment
app.get('/comment', function(req, res) {
  res.send('Hello Comment');
});

// Start listening on port 3000
app.listen(3000, function() {
  console.log('Listening on port 3000');
});