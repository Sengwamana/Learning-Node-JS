var express = require('express')
var app = express()
app.get('/home', function(req, res){
    res.send('Hello welcome to our website')
})
app.get('/about', function(req, res){
    res.send('It is about us page')
})
app.get('/contact', function(req, res){
    res.send('It is contact page')
})
app.listen(3000)

