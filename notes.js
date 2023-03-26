 const { default: chalk } = require('chalk');
const fs=require('fs')

//read note
const readNote = (title)=> {
    const notes=loadNotes()

    const noteToRead=notes.find((note)=> note.title === title)

    if(!noteToRead){
        console.log(chalk.red.inverse('No note found!'))
    }
    else{
        console.log(chalk.magenta('Your Note:-'))

        console.log('Title: '+chalk.blue.italic(noteToRead.title))
        console.log('Body: '+noteToRead.body)
    }
}

//remove old note
const removeNote = (title)=>{

    const notes=loadNotes()

    const noteToKeep = notes.filter((note)=>note.title !== title)
   // return noteToKeep


    if (notes.length > noteToKeep.length)
    {
        saveNotes(noteToKeep)
        console.log(chalk.green('Note removed!'))
    }
    else{
        console.log(chalk.red('No note found!'))
    }
}

//Listing Note
const listNotes = ()=>{
    const notes=loadNotes()
    
    console.log(chalk.magenta('Your Note...'))
    
    notes.forEach((note)=>console.log(note.title))
   }

  

//adding new note
const addNote = (title, body) =>{
    const notes=loadNotes()
  
//ES5 style 
//    const duplicateNotes = notes.filter(function(note){
//     return note.title=== title
//    })

    const duplicateNote = notes.find((note)=> note.title === title)

    if (!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    }
    else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

//saving Data
const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

//loading a note
//ES5 style of writting function
// const loadNotee = function(){

// }
//ES6 Style of shorten function
const loadNotes = ()=>{
try{
    const dataBuffer= fs.readFileSync('notes.json')
    const dataJSON=dataBuffer.toString()
    return JSON.parse(dataJSON)
}
catch(e){
    return []
}
}

module.exports = {
    addNote: addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}

console.log('git changed file')