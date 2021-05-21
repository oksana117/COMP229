import http from 'http'; // change here so the errors go away 
import path from

const hostname: string = '127.0.0.1'; //anything after the colon that's the type, good way to practice code
const port: number  = 3000;

const server: http.Server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});