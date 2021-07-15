const auth = require('../middleware/auth')
const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res
}

describe("Test suite for auth midleware", () => {
    it('when token not found, shoud call with status 400', async () => {
        let req = {}
        req.header = (input) => { if (input === 'x-auth-token') return "" }
        const res = mockResponse()
        await auth(req, res)
        console.log(res.status)
        expect(res.status).toHaveBeenCalledWith(400)
        expect(res.json).toHaveBeenCalled()
    })

    it('when token is invalid, shoud call with status 401', async () => {
        let req = {}
        req.header = (input) => { if (input === 'x-auth-token') return "AAAAAAAAAAAAAAAAAA" }
        const res = mockResponse()

        await auth(req, res)
        expect(res.status).toHaveBeenCalledWith(401)
        expect(res.json).toHaveBeenCalled()
    })

    // it('when token is valid, shoud call with status 200', async () => {
    //     const next = jest.fn()
    //     let req = {}
    //     req.header = (input) => { if (input === 'x-auth-token') return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6eyJpZCI6IjYwZWZmODQxYzMwOWNjODIzMzVhMzlmYyIsImlzQWRtaW4iOnRydWV9LCJpYXQiOjE2MjYzMzk0NTQsImV4cCI6MTY2MjMzOTQ1NH0.VbrZFBBcVQAPHsdjOyFrR72-9IliOdVYHk2i4tCWY5Y" }
    //     req.user = (input) => { return req }

    //     const res = mockResponse()
    //     await auth(req, res, next)
    //     console.log(res.status)
    //     expect(next).toHaveBeenCalled()
    // })
});
