
var fs = require('fs');
var http = require('http');

var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/html' });

    fs.readFile('./readMe.txt', 'utf8', function (error, data) {
        if (error) {
            res.write('Error occurred while reading the file: ' + error.message);
            res.end(); // End the response to prevent hanging
        } else {
            fs.writeFile('writeMe.txt', data, function (err) {
                if (err) {
                    res.write('Error occurred while writing to the file: ' + err.message);
                } else {
                    res.write('File written successfully. Content: ' + data);
                }
                res.end(); // Always end the response after writing
            });
        }
    });
});

server.listen(3000, function () {
    console.log('Server is listening on port 3000');
});


server.listen(3000)
console.log('Server is listening on port 3000')

var fs = require('fs')
var readMe = fs.readFile('readMe.txt', 'utf8', function (error,data) {
        if (error) {
            console.log('Error '+error)
        }
        else {
            fs.writeFile('WriteMe.txt', data, function (err) {
  if (err) {
      console.log("Error occured while writing the file "+err)
  } else {
         console.log('Already done bro file is written')
  }
            })
         
        }
    })
 
 /* if (error) {
    console.log('Error '+error)
  } else {
      console.log('You are done '+data)
  }*/
/*synch
var fs = require('fs')
var readMe = fs.readFileSync('readMe.txt','Utf8')
console.log(readMe)
*
var fs = require('fs');
fs.readFile('readMe.txt','utf8', function (error, data) {
    fs.writeFile('WriteMe.txt',data)
})
console.log(data)*/