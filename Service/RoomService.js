const db = require("../model")
const _ = require('lodash')
module.exports = {
    findOne : (fields) =>{
        let cond = {}
        if(fields.id){
            cond.id = fields.id
        }
        if(fields.hotel_id){
            cond.hotel_id = fields.hotel_id
        }
        if(fields.room_no){
            cond.room_no = fields.room_no
        }
       
        return db.room.findOne({where:cond}).then(v=>{
            if(_.isEmpty(v)) throw new Error("room not found")
            else{
                return v.toJSON()
            }
        })

    },
    create : (fields) =>{
        return db.room.create(fields).then(v=>{
            if(_.isEmpty(v)) throw new Error("failed to add room")
            else{
                return v.toJSON()
            }
        })
    },
    update : (fields,id) =>{
        return db.room.update(fields,{where:{id},returning:true}).then(v=>{
            if(_.isEmpty(v)) throw new Error("room not found")
            else{
                return v[1][0].toJSON()
            }
        })
    }
}