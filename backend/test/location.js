const { location } = require('../controllers/location');
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

const addLocation = () => describe("location should be add in bus", () => {
    console.log(3, "hello")
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6eyJpZCI6IjYwZTgyMjBlNTQyODJmNTM3YWU1NGJkMyIsImlzQWRtaW4iOnRydWV9LCJpYXQiOjE2MjU4MjU4MDcsImV4cCI6MTY2MTgyNTgwN30.EFTeCEIjDeNoRnPZLQ0iXBsTxGIof70T5_DmpoA0nBQ"
    jest.setTimeout(40000);
    it("admin should be create add location ", async () => {
        const res = await agent.post("/api/admins/admin/location")
            .set('x-auth-token', token).send({
                city: "indor",
                state: "Madhaya Pradesh"
            })
        expect(res.status).toBe(200)
    })
    it("It should add the loction with status 200", async () => {
        let req = {
            body: {
                city: "Morena",
                state: "Madhaya Pradesh"
            }
        }
        const res = mockResponse()
        await location(req, res)

        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.json).toHaveBeenCalled()
    })
    
    it("It should not add the loction as it is already exists, with status 400", async () => {
        let req = {
            body: {
                city: "Morena",
                state: "Madhaya Pradesh"
            }
        }
        const res = mockResponse()
        await location(req, res)

        expect(res.status).toHaveBeenCalledWith(400)
        expect(res.json.mock.calls[0][0]).toEqual({ errors: "Location Already Exists" })
    })
})

module.exports = { addLocation };

