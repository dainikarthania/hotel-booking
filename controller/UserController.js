const UserService = require("../Service/UserService")
const _=require('lodash')
module.exports = {
    createUser : async (req,res) =>{
        try{
            let {body} = req
            let user = await UserService.create(body)
            res.json({flag:true,data:user})
        }
        catch(e){
            console.log(e)
            if(e.message == "Validation error") return res.json({flag:true,message:`email is already in used`})
            return res.json({flag:true,message:e.message})
        }
    },
    updateUser : async(req,res) =>{
        try{
            let {body,params} = req
            if(_.isEmpty(body)) throw new Error("nothing here to update")
            let user = await UserService.update(body,params.id)
            if(_.isEmpty(user)) throw new Error("user not found")
            res.json({flag:true,data:user})
        }
        catch(e){
            if(e.message == "Validation Error") return res.json({flag:true,message:`email is already in used`})
            res.json({flag:true,message:e.message})
        }
    }
}