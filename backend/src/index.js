require('dotenv').config();
const app = require('./app')
const { dbConnection } = require('./database')

async function main() {
    
    await app.listen(app.get('port'));
    console.log('server on port 4000');
    
    dbConnection();
}


main();