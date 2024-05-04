const express = require('express');
const path = require('path');
const connectMongo = require('./connectMongo');
const indexRouter = require('./routers/index');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectMongo().then(() => {
    app.use('/', indexRouter);
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(err => {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1);
});
