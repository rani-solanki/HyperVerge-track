const { start } = require('../controllers/testing');
const mockResponce = () => {
    const res = {}
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res
}

describe("Test with example", () => {
    it('testing', async () => {
        const req = {
            body: {
                "name": "Rani",
                "phone":7772074692
            }
        }
        const res = mockResponce();
        await start(req,res)
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith("testing succesfull");
    })
})

