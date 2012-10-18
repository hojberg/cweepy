var express = require('express'),
    http    = require('http'),
    path    = require('path'),
    server  = express();

server.configure(function () {
  server.set('port', process.env.PORT || 3000);
  server.use(express.favicon());
  server.use(express.logger('dev'));
  server.use(express.bodyParser());
  server.use(express.methodOverride());
  server.use(server.router);
  server.use(express.static(path.join(__dirname, 'public')));
});

server.configure('development', function () {
  server.use(express.errorHandler());
});

// ----- APP ----- //
server.get('/', function (req, res, next) { 
  res.sendfile('public/index.html');
});

server.get('/cweeps', function (req, res) {
  res.send([
    { avatar: 'https://si0.twimg.com/profile_images/2536088319/4sl2go65was3o0km520j_reasonably_small.jpeg', message: 'Tom Dale is my hero' },
    { avatar: 'https://si0.twimg.com/profile_images/2201732897/notch_weird.png', message: 'Endermen used to be people' },
    { avatar: 'https://si0.twimg.com/profile_images/1968705093/avatar.jpg', message: 'dat cweep' },
    { avatar: 'https://si0.twimg.com/profile_images/2536088319/4sl2go65was3o0km520j_reasonably_small.jpeg', message: "We don't go to Ravenholm" }
  ]);
});

server.post('/cweeps', function (req, res) {
  // do stuff..
  res.status(200);
});

// ----- start server -----
http.createServer(server).listen(server.get('port'), function () {
  console.log("Express server listening on port " + server.get('port'));
});
