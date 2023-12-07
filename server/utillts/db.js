const mongoose = require('mongoose');

// const URL = "mongodb://127.0.0.1:27017/MERN_Prj_Thapa_Technical"
// mongoose.connect(URL);

const URL = process.env.MONGOOB_URL;
console.log(URL);

const connectDb = async () => {
    try {
        await mongoose.connect(URL);
        console.log('connection successfull to data base');
    } catch (error) {
        console.error('database connection failed');
        process.exit(0)
    }
}


module.exports = connectDb;
