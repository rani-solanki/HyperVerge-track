const {addStaff} = require('../controllers/staff'); 
const db = require('../config/db');
const App = require('../server')
const request = require('supertest');
const agent = request.agent(App);

beforeAll(async () => await db.connect());
afterAll(async () => await db.close());

const mockResponse = () => {
    const res = {}
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res
}

const addstaff = () => describe("staff should be add in bus", ()=>{
    console.log(5, "hello")
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6eyJpZCI6IjYwZTI5NWM5YWMyYmZiMzI2ZWEzM2ZkOSIsImlzQWRtaW4iOnRydWV9LCJpYXQiOjE2MjU5MDE3NjQsImV4cCI6MTY2MTkwMTc2NH0.OXeDbZ48rxMygTyrvpyFVUY74LGZLCN6Gx8KEOwDfHU"
    jest.setTimeout(20000);
    it("admin should be add staff ", async () => {
        const res = await agent.post("/api/admins/admin/addStaff")
            .set('x-auth-token', token).send({
                "name": "karthik Sharma",
                "phone": 7772074692,
                "address": "Rajstan india",
                "isDriver": true
            })
        expect(res.status).toBe(200)
    })

    it("It should add the staff with status 200", async ()=>{
        let req = {
            body: {
                "name": "karthik Sharma",
                "phone": 7772074692,
                "address": "Rajstan india",
                "isDriver": true
            }
        }
        const res = mockResponse()
        await addStaff(req, res)

        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.json).toHaveBeenCalled()
    })
})

module.exports = { addstaff}; 
