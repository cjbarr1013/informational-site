const http = require('node:http');
const fs = require('fs');

const page404 = fs.readFileSync('404.html', (err, data) => {
  if (err) throw err;
  return data;
});

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      filename = 'index.html';
      break;
    case '/about':
      filename = 'about.html';
      break;
    case '/contact-me':
      filename = 'contact-me.html';
      break;
    default:
      filename = '404.html';
      break;
  }

  fs.readFile(filename, function (err, data) {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.write(page404);
      res.end();
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    }
  });
});

server.listen(8080);
