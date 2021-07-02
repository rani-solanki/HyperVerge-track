const request = require('supertest');
const app = require('../app');
const db = require('../config/db');
const { adminSignup } = require('../controllers/Adminauth')
const { adminLogin } = require('../controllers/admin')

// Pass supertest agent for each test
console.log(db)
// Setup connection to the database
beforeAll(async () => await db.connect());
beforeEach(async () => await db.clear());
afterAll(async () => await db.close());


it('it should create a new user', async () => {
    let bodyData = {
        body: {
            "name": "salomi",
            "email": "salom20@navgurukul.org",
            "password": "7234582651",
            "isAdmin": true
        }
    }
    try {
        const responce = await adminSignup(bodyData)
        expect(responce.statusCode).toBe(200)
    } catch (err) {
        console.log("signup unsucessful",err)
    }
})

// usersign 
it('it should be user signin', async () => {
    let bodyData = {
        body: {
            "email": "salom20@navgurukul.org",
            "password": "7234582651"
        }
    }
    try {
        const res = await adminLogin(bodyData)
        expect(res.statusCode).toBe(200)
    } catch (err) {
        console.log(" login unsucessful", err)
    }
})
