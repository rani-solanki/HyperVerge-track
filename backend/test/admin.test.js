const { adminSignup } = require('../controllers/admin')
const { adminLogin } = require('../controllers/Adminauth')

const mockResponce = () => {
    const res = {}
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res
}

describe("Test with admin sign up", () => {
    jest.setTimeout(30000);
    it('it should create a new admin', async () =>{
        let req = {
            body: {
                "name": "salomi",
                "email": "salom20@navgurukul.org",
                "password": "7234582651",
                "isAdmin": true
            }
        }
        const res = mockResponce();
        await adminSignup(req, res)
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith("user registered");
    })
})

// usersign 
describe("Test with admin sign in", () => {
    it('it should be admin signin', async () => {
        let bodyData = {
            body: {
                "email": "salom20@navgurukul.org",
                "password": "7234582651"
            }
        }
        const res = mockResponce();
        await adminLogin(req, res)
        // expect(res.json).toHaveBeenCalledWith(200);
        console.log(res.json("getMockName"))
    })
})

