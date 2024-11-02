/*const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
  res.send('I am Sengwamana Emeran from L3 SOD A !');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
*/
const http = require('http');
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1>Hello World!</h1>');
  res.write('<h1>Hello Bayikunde !</h1>');

  res.end()
});
server.listen(5000, () => { 
console.log(`App listening at http://localhost:5000`)
}) 