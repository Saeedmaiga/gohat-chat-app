const mongoose = require('mongoose');

async function connectDB() {
    try{

        await mongoose.coonect(process.env.MONGO_URI)

            const connection = mongoose.connection;

            connection.on('connected', () => {
                console.log('Mongoose connected to the database');
            });
        
            connection.on('error', () => {
                console.log('Mongoose connection error: ', error);
            });
        
    }
    catch(error){
        console.log('Error connecting to the database ', error)
    }
}

module.exports = connectDB;