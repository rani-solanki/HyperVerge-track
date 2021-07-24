const { getBus, searchBus } = require('../../controllers/bus');
const { FindBusStatus } = require('../../controllers/Status');
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const isAuth = require('../../middleware/auth');

// get the bus ;
router.get("/:busId", isAuth, getBus, (req, res) => { })

//  tickets status
router.get('/status/:busId', isAuth, FindBusStatus);

// search bus
router.post('/searchbus', isAuth, [
    check('from', "from is required").not().isEmpty(),
    check('to', "to is required").not().isEmpty(),
    check('date', "date is required").not().isEmpty()
], searchBus);

module.exports = router;