const start = (req, res) => {
    const { name, phone } = req.body
    if (name == "Rani" || phone == 7772074692) {
        return res.status(200).json("testing succesfull")
    }
    else {
        return res.status(500).json("testing fail")
    }
}

module.exports = { start }



