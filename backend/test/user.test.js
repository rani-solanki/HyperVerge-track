const request = require('supertest');
const app = require('../app');
const db = require('../config/db');
const { userSignup } = require('../controllers/user')
const { loginuser } = require('../controllers/auth')
const { resetPassword } = require('../controllers/resetPassword');
const App = require('../server')
const agent = request.agent(App);

// Setup connection to the database
beforeAll(async () => await db.connect());
afterAll(async () => await db.clear());
afterAll(async () => await db.close());

const mockResponce = () => {
    const res = {}
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res
}

// user signup
describe("Test with user sign up", () => {
    it('it should create a new user', async () => {
        let req = {
            body: {
                "name": "Rani Solanki",
                "email": "rani19@navgurukul.org",
                "password": "7234582651"
            }
        }
        const res = mockResponce();
        await userSignup(req, res)
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith("user registered");
    })
})

// usersign 
describe("Test with user login", () => {
    it('it should be user signin', async () => {
        let req = {
            body: {
                "email": "rani19@navgurukul.org",
                "password": "7234582651"
            }
        }
        const res = mockResponce();
        console.log("message from user sign in",res)
        await loginuser(req, res)
        expect(res.status).toHaveBeenCalledWith(200);
        console.log(res.json)
    })
});

// next testing 
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
                "name": "Rani Solanki",
                "email": "rani19@navgurukul.org",
                "password": "7234582651"
            }
        }
        const res = mockResponce();
        await userSignup(req, res, next)
        console.log(next.mock.calls.length, "next 1");
        console.log(next.mock.calls[0], "response");
    })
})

// confirm email
// it('it should be confirm email', async () => {
//     let bodyData = {
//         body: {
//             "email": "rani19@navgurukul.org"
//         }
//     }
//     try {
//         const res = await resetPassword(bodyData)
//         expect(res.status).toBe(200)
//         expect(res.json).toBe("expect(res.statusCode).toBe(200")

//     } catch (err) {
//         console.log("res useet password failed", err)
//     }
// })

// api testing 
it("user should be create new user", async () => {
    const res = await agent.post("/api/users/signup").send({
            name: "Gyandeep",
            email: "gyandeep5364@gmail.com",
            password: "12345677346"
    })
    expect(res.status).toBe(200)
})

// // user login 
it("user should be able to login", async () => {
    const res = await agent.post('/api/auth/login').send({

        email: "gyandeep5364@gmail.com",
        password: "12345677346"
    })
    expect(res.status).toBe(200)
    console.log(res.status)
})


