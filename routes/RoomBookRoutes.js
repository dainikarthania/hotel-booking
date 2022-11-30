let express = require('express'),
    router = express.Router();
const { bookRoom } = require('../controller/RoomBookController');
let validator = require('../schema')

router.post("/",validator("bookRoom"),bookRoom)


module.exports = router