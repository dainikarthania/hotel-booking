let express = require('express'),
    router = express.Router();
const { addRoom,updateRoom } = require('../controller/RoomController');
const validate= require('../schema');

router.post("/add",validate("addRoom"),addRoom)
router.put("/edit/:id",validate("updateRoom"),updateRoom)

module.exports = router