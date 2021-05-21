import http from 'http'; // change here so the errors go away 
import path from 'path'; 
import fs from 'fs';

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

function displayHome ( res: http.ServerResponse) : void 
{
  fs.readFile("index.html", (err,data) => {

    if (err)
    {
      res.writeHead(404);
      res.end("ERROR: 404 - Page not found");
      console.log("Error");
      return;
    }
    //console.log(data); 
    res



  });
}