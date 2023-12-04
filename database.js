const mongoose =  require('mongoose');
require('dotenv').config();

async function connectDB() {
    console.log('Conectando ao banco de dados...');
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Conectado ao banco de dados!');
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDB;