var fs=require('fs')
var http = require('http')
var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'application/json' })
    var obje = {
        name: 'Emeran Tech',
        job: 'Software Engineer',
        age: 18
    }
res.end(JSON.stringify(obje))
})


    
server.listen(3000)