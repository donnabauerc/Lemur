var express = require('express');

var app = express();
var server = require('http').createServer(app);

server.listen(8080, function () {
  console.log('Server running at http://localhost:8080');
});

app.use(express.static(__dirname +'/src'));
