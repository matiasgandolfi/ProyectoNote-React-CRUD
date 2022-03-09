const notesCtrl = {};


const Note = require('../models/Note')


//Este metodoso se usa para solicitar datos
notesCtrl.getNotes = async (req, res) => {
    //find consulta todo los datos que hay en esta coleccion

    //notes son todas las notas de la base de datos
    const notes = await Note.find();
    res.json(notes)
    }



//Metodo usado para guardar datos
notesCtrl.createNotes = async (req, res)  => {
    
    const {title, content, date, author} = req.body;
    const newNote = new Note({
        title: title,
        content: content,
        date: date,
        author: author
    });
    await newNote.save()
    res.json({message: 'Note saved'})
}

notesCtrl.getNote = async (req, res) => { 

    const note = await Note.findById(q.params.id)
    //console.log(req.params.id)      //Para obtener el Id
    res.json(note)
}

notesCtrl.updateNote = async (req, res) => {
    const {title, content, author} = req.body;
    await Note.findOneAndUpdate(req.params.id,{
        title: title,
        author,
        content
    })
    res.json({message: 'Notes Updated'})
};





notesCtrl.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({message: 'Notes Delted'});
} ;


module.exports = notesCtrl;