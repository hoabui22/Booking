const connectMongo = require('../configs/connectMongo');

let getBooking = (req, res) => {
    return res.render('index.ejs')
}

let postBooking = async (req, res) => {
    let client;
    try {
        client = await connectMongo();
        const db = client.db();

        const {
            fullName, 
            phoneNumber,
            email,
            selectedSeats,
            totalPrice
        } = req.body

        console.time("QueryTime");
        const result = await db.collection('Booking').insertOne({
            fullName: fullName,
            phoneNumber: phoneNumber,
            email: email,
            selectedSeats: selectedSeats,
            totalPrice: Number(totalPrice),
        })
        console.timeEnd("QueryTime");

        console.log(result);

            return res.render('index.ejs')
    }
    catch (err) {
        console.error('Error when searching, please try again!!: ', err);
            return res.render('index.ejs')
    }
}

module.exports = {
        getBooking,
        postBooking,
}