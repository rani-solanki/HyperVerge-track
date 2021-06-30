const request = require('supertest');
const App = require('../app');
const server = require('../server')
const Db = require('../config/inmemoryDbs');
const User = require('../models/users');

// Setup connection to the database
beforeAll(async () => await Db.DBconnect());
beforeEach(async () => await Db.clear());
afterAll(async () => await Db.close());

// exports.res = {
//     statusCode:200
// }


it("user should be create new user", async () => {
    jest.setTimeout(30000);
    const res = await request(server)
        .post('/api/users')
        .send({
            name: "Gyandeep",
            email: "gyandeep5364@gmail.com",
            password: "12345677346",
            isAdmin: false
        })
    expect(res.statusCode).toBe(200)
    console.log(err.statusCode)
})

it("Should can get data from the dbs", async done => {
    const res ={
        name: 'Rani Solanki',
        email: "rani19@navgurukul.org",
        password: "rani19@solanki",
        isAdmin: true
    }

    // Searches the user in the database
    const user = await User.findOne({ email: "rani19@navgurukul.org" });
    expect(user).toBeTruthy(res)
    done();
});




