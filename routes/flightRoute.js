const express = require('express');

const router = express.Router();
const {addFlight,getFlight,getAllFlight,updateFlight,deleteFlight} = require('../controllers/flightController');

router.route('/').get(getAllFlight).post(addFlight)
router.route('/:id').get(getFlight).put(updateFlight).delete(deleteFlight)

module.exports = router;

