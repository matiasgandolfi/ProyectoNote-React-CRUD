const  { Router } = require('express');
const router = Router();


const { getUsers, createUsers, deleteUsers} = require('../controllers/users.controllers')


        router.route('/')
        .get(getUsers)
        .post(createUsers)



        router.route('/:id')        //el id es para especificar de usuario quiero cambiar

       
        .delete(deleteUsers)




module.exports = router;