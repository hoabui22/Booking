const mongoose = require('mongoose');

async function connectMongo() {
    try {
        await mongoose.connect('mongodb://localhost:27017/bookingDB', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Đã kết nối đến MongoDB!');
        return mongoose.connection;
    } catch (error) {
        console.error('Lỗi kết nối MongoDB:', error);
        throw error;
    }
}

module.exports = connectMongo;
