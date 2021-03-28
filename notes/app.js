const fs = require('fs');
fs.writeFileSync('helloWorld.txt','Hi there, Welcome to Node.js')
fs.appendFileSync('notes.txt','\nI am appending this to notes.txt')