// create web server 
// 1. create web server object
var http = require('http');
// 2. create web server
var server = http.createServer(function (req, res) {
  // 3. set content-type
  res.writeHead(200, { 'Content-Type': 'text/html' });
  // 4. send response
  res.end('<h1>Hello World!</h1>');
});
// 5. listen to port
server.listen(3000, function () {
  console.log('Server started at port 3000');
});
// 6. run node app.js
// 7. open browser and go to http://localhost:3000
// 8. install nodemon globally
// npm install -g nodemon
// 9. run nodemon app.js
// 10. open browser and go to http://localhost:3000
// 11. add a route
// 12. create a route object
var route = {
  home: function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Welcome Home!</h1>');
  },
  login: function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Please Login</h1>');
  }
};
// 13. create a route function
function routeFn(req, res) {
  var url = req.url;
  switch (url) {
    case '/':
      route.home(req, res);
      break;
    case '/login':
      route.login(req, res);
      break;
    default:
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>Page not found</h1>');
      break;
  }
}
// 14. create web server object
var http = require('http');
// 15. create web server
var server = http.createServer(routeFn);
// 16. listen to port
server.listen(3000, function () {
  console.log('Server started at port 3000');
});
// 17. run nodemon app.js
// 18. open browser and go to http://localhost:3000
// 19. open browser and go to http://localhost:3000/login
// 20. open browser and go to http://localhost:3000/abc
// 21.