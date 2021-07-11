const { getBus, FindBusStatus} = require('../../controllers/bus');
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const isAuth = require('../../middleware/auth');

router.get("/:busId", isAuth, getBus, (req, res) => { })

module.exports = router;

// router.get('/status/:busId', isAuth, getBus);

