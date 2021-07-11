const { adminSignup } = require('../controllers/admin')
const { adminLogin } = require('../controllers/Adminauth')
const { addLocation } = require('./location');
const { Agency} = require('./agency')
const { addstaff } = require('./staff');
const db = require('../config/db');
const App = require('../server')
const request = require('supertest');
const agent = request.agent(App);

beforeAll(async () => await db.connect());
afterAll(async () => await db.close());

const mockResponce = () => {
    const res = {}
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res
}

describe("Test with admin sign up", () => {
    console.log(1,"hello")
    jest.setTimeout(15000);
    // admin signup api testing 
    it('it should create a new admin', async () => {
        const next = jest.fn();
        let req = {
            body: {
                name: "Sonu shakya",
                email: "sonu19@navgurukul.org",
                password: "123456789",
                isAdmin: true
            }
        }
        const res = mockResponce();
        await adminSignup(req, res, next)
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith("admin registered");
    })

    // admin login api testing
    it("admin should be create new admin", async () => {
        const res = await agent.post("/api/admins/signup").send({
            name: "Gyandeep",
            email: "gyandeep23@gmail.com",
            password: "12345677346",
            isAdmin: true
        })
        expect(res.status).toBe(200)
    })
})

// / next testing
describe("Test with next middleware ", () => {
    it('it should be test next middleware', async () => {
        const next = jest.fn();
        const mockResponce = () => {
            const res = {}
            res.status = jest.fn().mockReturnValue(res);
            res.json = jest.fn().mockReturnValue(res);
            return res
        }

        let req = {
            body: {
                name: "Rani Solanki",
                email: "rani19@navgurukul.org",
                password: "7234582651",
                isAdmin: true
            }
        }
        const res = mockResponce();
        await adminSignup(req, res, next)
        console.log(next.mock.calls.length, "next 2");
    })
})

describe("test should be run for admin sign in", () => {
    console.log(2, "hello")
    // admin login api testing
    it("admin should be able to login", async () => {
        jest.setTimeout(15000);
        const res = await agent.post('/api/adminauth/login').send({
            email: "gyandeep23@gmail.com",
            password: "12345677346"
        })
        expect(res.status).toBe(200)
    })
    
    addLocation()
    Agency()
    addstaff()

    // admin unit testing
    it('it should be admin signin', async () => {
        let req = {
            body: {
                email: "sonu19@navgurukul.org",
                password: "123456789"
            }
        }
        const res = mockResponce();
        await adminLogin(req, res)
        expect(res.status).toHaveBeenCalledWith(200);
    })
})
