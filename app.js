
const notes = require('./notes.js')
const yargs = require('yargs')

// customize versions
yargs.version('1.1.1')

//create add command
yargs.command({
    command:'add',
    describe: 'add a new note.',
    builder: {
        title: {
            describe:'Note Title',
            demandOption:true,
            type:'string'
        },
        body: {
            describe:'Note Body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})


//create remove command
yargs.command({
    command:'remove',
    describe:'remove a note.',
    builder: {
        title:{
            describe:'note title',
            demandOption:true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    } 
})

//create list command
yargs.command({
    command: 'list',
    describe:'list all added note.',
    handler(){
        notes.listNotes()
    }
    
})

// create read command
yargs.command({
    command:'read',
    describe:'read the note.',
    builder: {
        title:{
            describe:'note title',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    } 
})

yargs.parse()

console.log('New branch created in git')