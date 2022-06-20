const fs = require('fs'),
     path = './gulp/tasks',
     sourcePath = fs.readdirSync(path).map(file => file = path + '/' + file)
module.exports = sourcePath