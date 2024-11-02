
const port = 5000;
const http = require('http');
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello World!</h1>');
    res.write('<h1>Hello Bayikunde !</h1>');

    res.end()
})
server.listen(5000, () =>
{ console.log(`server is listening on http://localhost:${port}`) })
