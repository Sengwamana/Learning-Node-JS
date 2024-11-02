/*
var fs = require('fs')
myReadStream = fs.createReadStream('./readMe.txt', 'utf8')
myWriteStream = fs.createWriteStream('./writeMe.txt')

myReadStream.pipe(myWriteStream)
*/
var fs=require('fs')
var http = require('http')
var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/html' })
    myReadStream = fs.createReadStream('./readMe.txt', 'utf8')
    myReadStream.pipe(res)
})


    
server.listen(3000)