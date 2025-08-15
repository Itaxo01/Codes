import http from 'http';

const port = process.env.PORT;
const hostname = process.env.HOSTNAME; // This is localhost

const server = http.createServer((req, res) => {
  // This code runs for every request
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});