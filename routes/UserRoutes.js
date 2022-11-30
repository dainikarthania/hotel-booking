let express = require('express'),
    router = express.Router();
const { createUser, updateUser } = require('../controller/UserController');
let validator = require('../schema')

router.post("/create",validator("addUser"),createUser)
router.put("/update/:id",validator("updateUser"),updateUser)


module.exports = router