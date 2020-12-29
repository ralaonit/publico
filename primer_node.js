var hola = "hola";
var adios = "adios";
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World! ');

// Tercer cambio pongo una variable inutil al princpio

}).listen(8080);