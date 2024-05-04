const { MongoClient } = require('mongodb')

//let dbConnection

async function connectMongo() {
    try {
        const client = new MongoClient('mongodb://127.0.0.1:27017/bookingDB', { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        console.log('Connected to MongoDB');
        // Trả về client để sử dụng cho các truy vấn khác, nếu cần
        return client;
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = connectMongo