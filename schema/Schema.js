const Joi = require("joi")

module.exports = {
    addUser : Joi.object({
            mobile : Joi.number().min(10).required(),
            age : Joi.number().min(13).max(100).required(),
            name : Joi.string().required(),
            address : Joi.string().required(),
            email : Joi.string().pattern(
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            ).required(),
        }),
    updateUser : Joi.object({
            mobile : Joi.number().min(10),
            age : Joi.number().min(13).max(100),
            name : Joi.string(),
            address : Joi.string()
    }),
    addHotel: Joi.object({
        type : Joi.string().valid("1 star","2 star","3 star","4 star","5 star").required(),
        name:Joi.string().required(),
        address:Joi.string().required()
    }),
    updateHotel : Joi.object({
        type : Joi.string().valid("1 star","2 star","3 star","4 star","5 star"),
        address:Joi.string()
    }),
    addRoom : Joi.object({
        type : Joi.string().valid("suite","normal").required(),
        room_no : Joi.string().required(),
        avaliable : Joi.bool().required(),
        room_rent : Joi.number().min(10).required(),
        hotel_id: Joi.number().required()
    }),
    updateRoom : Joi.object({
        type : Joi.string().valid("suite","normal"),
        avaliable : Joi.bool(),
        room_rent : Joi.number().min(10)
    }),
    bookRoom: Joi.object({
        hotel_name : Joi.string().required(),
        room_no : Joi.string().required(),
        user_id : Joi.number().required()
    })
}