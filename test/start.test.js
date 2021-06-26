const { MongoClient } = require('mongodb');
const config = require("config");
const __MONGO_URI__ = config.get("mongoURL");

it("it should be test", () => {
    expect("welcome").toBe("welcome")
})

describe('insert', () => {
    let connection;
    let db;

    beforeAll(async () => {
        console.log(global.__MONGO_URI__)
        connection = await MongoClient.connect(global.__MONGO_URI__, {
            useNewUrlParser: true,
        });
        db = await connection.db(global.__MONGO_DB_NAME__);
    });

    afterAll(async () => {
        await connection.close();
        // await db.close();
    });

    // user signup 
    it('should insert a doc into collection', async () => {
        const users = db.collection('users');

        const mockUser = {
            name: 'Rani Solanki',
            email: "rani19@navgurukul.org",
            password: "navgurukul",
            isAdmin:true
        };

        await users.insertOne(mockUser);

        const insertedUser = await users.findOne({ email: "rani19@navgurukul.org", });
        console.log(insertedUser)
        expect(insertedUser).toEqual(mockUser);
    });
});






