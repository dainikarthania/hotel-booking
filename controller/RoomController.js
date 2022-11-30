const roomService = require("../Service/RoomService")
const _=require('lodash')
module.exports = {
    addRoom : async (req,res) =>{
        try{
            let {body} = req
            let user = await roomService.create(body)
            res.json({flag:true,data:user})
        }
        catch(e){
            if(e.message == "Validation error") return res.json({flag:true,message:`room number already exist`})
            return res.json({flag:true,message:e.message})
        }
    },
    updateRoom : async(req,res) =>{
        try{
            let {body,params} = req
            if(_.isEmpty(body)) throw new Error("nothing here to update")
            let user = await roomService.update(body,params.id)
            if(_.isEmpty(user)) throw new Error("user not found")
            res.json({flag:true,data:user})
        }
        catch(e){
            if(e.message == "Validation Error") return res.json({flag:true,message:`room number already exist`})
            res.json({flag:true,message:e.message})
        }
    }
}