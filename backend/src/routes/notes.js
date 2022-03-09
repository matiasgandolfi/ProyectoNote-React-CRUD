const  { Router } = require('express');
const router = Router();


const {getNotes, createNotes, getNote, deleteNote, updateNote} = require('../controllers/note.controllers')


router.route('/')
        .get(getNotes)
        .post(createNotes)



        router.route('/:id')        //el id es para especificar de usuario quiero cambiar
                .get(getNote)
                .put(updateNote)
                .delete(deleteNote)


module.exports = router;