const mongoose = require('mongoose');
const config = require("config");
const db = config.get("mongoURL");

// const dbConnect = async () => {
    if (process.env.NODE_ENV === 'test') {
        const { MongoMemoryServer } = require('mongodb-memory-server');
        const mongoServer = new MongoMemoryServer();

        const opts = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            keepAlive: 1
        };
        
        // Provide connection to a new in-memory database server.
        const connect = async () => {
            // NOTE: before establishing a new connection close previous
            await mongoose.disconnect();

            const mongoUri = await mongoServer.getUri();
            await mongoose.connect(mongoUri, opts, err => {
                if (err) {
                    console.error(err);
                }
            });
        };

        // Remove and close the database and server.
        const close = async () => {
            await mongoose.disconnect();
            await mongoServer.stop();
        };
        
        // Remove all data from collections
        const clear = async () => {
            const collections = mongoose.connection.collections;
            for (const key in collections) {
                await collections[key].deleteMany();
            }
        };
        module.exports = {
            connect,
            close,
            clear
        };

    } else {
        
            try {
                mongoose.connect(db, {
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
