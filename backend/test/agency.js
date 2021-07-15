const { createAgency } = require('../controllers/Agency');
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

const Agency = () => describe("agency should be add in bus", ()=>{
    console.log(4, "hello")
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6eyJpZCI6IjYwZTI5NWM5YWMyYmZiMzI2ZWEzM2ZkOSIsImlzQWRtaW4iOnRydWV9LCJpYXQiOjE2MjU5MDE3NjQsImV4cCI6MTY2MTkwMTc2NH0.OXeDbZ48rxMygTyrvpyFVUY74LGZLCN6Gx8KEOwDfHU"
    jest.setTimeout(30000);
    it("admin should be add agency", async () => {
        const res = await agent.post("/api/admins/admin/agency")
            .set('x-auth-token', token).send({
                "phone": 7782376487,
                "agencyName": "laxmi agency",
                "headOfficeLocation": "main"
            })
        expect(res.status).toBe(200)
    })

    it("It should add the agency with status 200", async () => {
        let req = {
            body: {
                "phone": 7782376487,
                "agencyName": "laxmi agency",
                "headOfficeLocation": "main"
            }
        }
        const res = mockResponse()
        await createAgency(req, res)

        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.json).toHaveBeenCalled()
    })
})

module.exports = { Agency }