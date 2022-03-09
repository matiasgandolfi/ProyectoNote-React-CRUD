const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI

const dbConnection = async() => {
    
    try {
        
        await mongoose.connect( URI , {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            });

        console.log('DB Online');


    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de inicializar BD');
    }


}


module.exports = {
    dbConnection
}












