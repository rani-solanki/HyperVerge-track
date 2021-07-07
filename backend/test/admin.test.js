const { adminSignup } = require('../controllers/admin')
const { adminLogin } = require('../controllers/Adminauth')

const mockResponce = () => {
    const res = {}
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res
}

describe("Test with admin sign up", () => {
    jest.setTimeout(50000);
    it('it should create a new admin', async () => {
        const next = jest.fn();
        let req = {
            body: {
                name: "Rani Solanki",
                email: "rani19@navgurukul.org",
                password: "7234582651",
                isAdmin: true
            }
        }

        const res = mockResponce();
        await adminSignup(req, res,next)
        expect(next).toHaveBeenCalledWith();
        expect(res.json).toHaveBeenCalledWith("admin registered");
    })
})

// usersign 
describe("Test with admin sign in", () => {
    it('it should be admin signin', async () => {
        let bodyData = {
            body: {
                email: "rani19@navgurukul.org",
                password: "7234582651",
            }
        }
        const res = mockResponce();
        console.log("message from user sign in", res)
        await adminLogin(req, res)
        expect(res.status).toHaveBeenCalledWith(200);
        console.log(res.json)
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
                isAdmin:true
            }
        }
        const res = mockResponce();
        await adminSignup(req, res, next)
        console.log(next.mock.calls.length, "next 2");
        console.log(next.mock.calls[0], "response");
    })
})

