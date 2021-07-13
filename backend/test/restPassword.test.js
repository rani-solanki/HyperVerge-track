const { resetPassword } = require('../controllers/resetPassword');
const db = require('../config/db');
const App = require('../server')
const request = require('supertest');
const agent = request.agent(App);

// beforeAll(async () => await db.connect());
// afterAll(async () => await db.close());

// confirm email
describe("password should be reset", () => {
    jest.setTimeout(15000);
    it("admin should be create new admin", async () => {
        const res = await agent.post("/api/users/resetPassword").send({
            "email": "aman67@navgurukul.org",
            "password": "navgurukul"
        })

        expect(res.status).toBe(200)
    })

    it('it should be confirm email', async () => {
        let bodyData = {
            body: {
                "email": "aman67@navgurukul.org"
            }
        }
        try {
            const res = await resetPassword(bodyData)
            expect(res.status).toBe(200);
            expect(res.json).toBe("check your email");
        } catch (err) {
            console.log("res useet password failed", err)
        }
    })
})
