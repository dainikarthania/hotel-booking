const db = require("../model")
const _ = require('lodash')
module.exports = {
    findOne : (fields) =>{
        let cond = {}
        if(fields.id){
            cond.id = fields.id
        }
        if(fields.email){
            cond.email = fields.email
        }
        return db.user.findOne({where:cond}).then(v=>{
            if(_.isEmpty(v)) throw new Error("user not found")
            else{
                return v.toJSON()
            }
        })

    },
    create : (fields) =>{
        return db.user.create(fields).then(v=>{
            if(_.isEmpty(v)) throw new Error("failed to add user")
            else{
                return v.toJSON()
            }
        })
    },
    update : (fields,id) =>{
        return db.user.update(fields,{where:{id},returning:true}).then(v=>{
            if(_.isEmpty(v)) throw new Error("user not found")
            else{
                return v[1][0].toJSON()
            }
        })
    }
}