let express = require('express'),
    router = express.Router();
const { addNewHotel, updateHotel } = require('../controller/HotelController');
let validator = require('../schema')

router.post("/add",validator("addHotel"),addNewHotel)
router.put("/edit/:id",validator("updateHotel"),updateHotel)


module.exports = router