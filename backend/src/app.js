const express = require('express');
const cors = require ('cors');  //Permite que dos servidores puedan intercambiar datos entre ellos
const app = express();

//settings  - congifurar el servidor
app.set('port', process.env.PORT || 4000);




//middlewares   - definir funciones antes que lleguen a las rutas

app.use(cors());
app.use(express.json());



//routes - /api/... es solamente para saber que es una api

app.use('/api/users', require('./routes/users'));
app.use('/api/notes', require('./routes/notes'))





module.exports = app;