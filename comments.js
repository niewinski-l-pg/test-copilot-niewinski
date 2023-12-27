// crete web server



// 1. load modules
var http = require('http');
var url = require('url');
var fs = require('fs');
var qs = require('querystring');

// 2. create web server
var server = http.createServer(function(req, res) {
  // 2.1 get url
  var parsedUrl = url.parse(req.url);
  var resource = parsedUrl.pathname;

  // 2.2 remove first slash
  if (resource == '/') {
    resource = '/index.html';
  }

  // 2.3 read file from web server
  var resourcePath = '.' + resource;
  console.log(resourcePath);

  // 2.4 check if file exists
  if (fs.existsSync(resourcePath)) {
    // 2.4.1 read file
    fs.readFile(resourcePath, 'utf-8', function(error, data) {
      if (error)
        throw error;

      // 2.4.2 write file to response
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    } 
    }
