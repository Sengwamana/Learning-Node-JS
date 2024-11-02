var fs = require('fs')
myReadStream = fs.createReadStream('./readMe.txt', 'utf8')
myWriteStream = fs.createWriteStream('./writeMe.txt')
myReadStream.on('data', function (chunk) {
    console.log('New Chunk Received : ')
    myWriteStream.write(chunk)
})