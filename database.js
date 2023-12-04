const mongoose =  require('mongoose');

async function connectDB() {
    console.log('Conectando ao banco de dados...');
    try {
        await mongoose.connect('mongodb+srv://catarinacmd:kBXjxSJBVgJ8XCxG@clusterlivros.0btf5td.mongodb.net/?retryWrites=true&w=majority');
        console.log('Conectado ao banco de dados!');
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDB;