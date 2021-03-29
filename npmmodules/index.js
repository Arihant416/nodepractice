const getNotes = require('./notes')
const chalk = require('chalk');
const yargs = require('yargs');
// Customize yargs version

yargs.version('1.1.0');

// Add Command
yargs.command({
  command:'add',
  describe:'Add a new Note',
  builder:{
    title:{
      describe:'Note title',
      demandOption:true,
      type:'string'
    },
    body:{
      describe:'Note body',
      demandOption:true,
      type:'string'
    }
  },
  handler:function(argv){
    console.log(`Title: ${argv.title}\nBody: ${argv.body}`)
  }
})

// Remove Command
yargs.command({
  command:'remove',
  describe:'Remove a note',
  handler:function(){
    console.log('Removing a note');
  }
})

// List Command
yargs.command({
  command:'list',
  describe:'List the notes',
  handler:function(){
    console.log('Listing the notes');
  }
})

// Read Command
yargs.command({
  command:'read',
  describe:'Reading a note',
  handler:function(){
    console.log('Reading a note');
  }
})

yargs.parse();