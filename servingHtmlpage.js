var fs=require('fs')
var http = require('http')
var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/html' })
    myReadStream = fs.createReadStream('./i.html', 'utf8')
    myReadStream.pipe(res)
})


    
server.listen(3000)