const connectMongo = require('../configs/connectMongo');

let getBooking = async (req, res) => {
    let client;
    try {
        client = await connectMongo();
        const db = client.db();
        
        const distinctSelectedSeats = await db.collection('Booking').distinct('selectedSeats');
        
        return res.render('index.ejs', { selectedSeats: distinctSelectedSeats, success: "", error: ""});
    }
    catch (err) {
        console.error('Error when searching, please try again!!: ', err);
        return res.render('index.ejs', {selectedSeats: [], success: "", error: "Error when searching, please try again!!"})
    }
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

        const distinctSelectedSeats = await db.collection('Booking').distinct('selectedSeats');

        return res.render('index.ejs', {selectedSeats: distinctSelectedSeats, success: "Your Seat", error: ""})
    }
    catch (err) {
        console.error('Error when searching, please try again!!: ', err);
        return res.render('index.ejs', {selectedSeats: [], success: "", error: "Error when searching, please try again!!"})
    }
}

module.exports = {
        getBooking,
        postBooking,
}