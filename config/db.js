const mongoose = require('mongoose');
const config = require("config");
const db = config.get("mongoURL");

const dbConnect = async () => {
    try {
        await mongoose.connect(db, {
            
            // To use the new parser, pass option
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        }),
            console.log("mongodb connect..")
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = { dbConnect };

