const db = require("../model")
const _ = require('lodash')
module.exports = {
    create : (fields) =>{
        return db.room_booking.create(fields).then(v=>{
            if(_.isEmpty(v)) throw new Error("failed to book the room")
            else{
                return v.toJSON()
            }
        })
    }
}