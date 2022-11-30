const db = require("../model")
const _ = require('lodash')
module.exports = {
    findOne : (fields) =>{
        let cond = {}
        if(fields.id){
            cond.id = fields.id
        }
        if(fields.name){
            cond.name = fields.name
        }
        if(fields.type){
            cond.type = fields.type
        }
        console.log(cond)
        return db.hotel.findOne({where:cond}).then(v=>{
            if(_.isEmpty(v)) throw new Error("hotel not found")
            else{
                return v.toJSON()
            }
        })

    },
    create : (fields) =>{
        return db.hotel.create(fields).then(v=>{
            if(_.isEmpty(v)) throw new Error("failed to add hotel")
            else{
                return v.toJSON()
            }
        })
    },
    update : (fields,id) =>{
        return db.hotel.update(fields,{where:{id},returning:true}).then(v=>{
            if(_.isEmpty(v)) throw new Error("hotel not found")
            else{
                return v[1][0].toJSON()
            }
        })
    }
}