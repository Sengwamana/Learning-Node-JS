var express = require('express')
var app = express()
var fs = require('fs')
app.get('/' || '/home', function (req,res) {
    mystream = fs.createReadStream('./i.html', 'utf8')
    mystream.pipe(res)
})
app.get('/contact', function (req,res) {
    mystream = fs.createReadStream('./contact.html', 'utf8')
    mystream.pipe(res)
})
app.get('/aboutUs', function (req,res) {
    mystream = fs.createReadStream('./aboutUs.html', 'utf8')
    mystream.pipe(res)
})
app.get('/ourService', function (req,res) {
    mystream = fs.createReadStream('./ourService.html', 'utf8')
    mystream.pipe(res)
})
app.listen(3000)