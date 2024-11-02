var express = require('express')
var app = express()
/*
app.get('/profile:id', function (req, res) {
    res.send('You are requesting profile of id '+req.params.id)
})
*/

app.get('/profile:name', function (req, res) {
    res.send('You are requesting profile of name '+req.params.name)
})

app.listen(3000)