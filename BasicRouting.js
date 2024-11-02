var fs=require('fs')
var http = require('http')
var server = http.createServer(function (req, res) {
    if (req.url == '/home' || req.url == '/') {
         res.writeHead(200, { 'content-type': 'text/html' })
    myReadStream = fs.createReadStream('./i.html', 'utf8')
    myReadStream.pipe(res) 
    }
  
        if (req.url == '/contact') {
         res.writeHead(200, { 'content-type': 'text/html' })
    myReadStream = fs.createReadStream('./contact.html', 'utf8')
    myReadStream.pipe(res) 
    }
          if (req.url == '/ourService') {
         res.writeHead(200, { 'content-type': 'text/html' })
    myReadStream = fs.createReadStream('./ourService.html', 'utf8')
    myReadStream.pipe(res) 
    }

          if (req.url == '/aboutUs.html') {
         res.writeHead(200, { 'content-type': 'text/html' })
    myReadStream = fs.createReadStream('./aboutUs.html', 'utf8')
    myReadStream.pipe(res) 
    }
})


    
server.listen(3000)