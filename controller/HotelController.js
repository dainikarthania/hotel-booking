const HotelService = require("../Service/HotelService")
const _ =require('lodash')

module.exports = {
    addNewHotel : async (req,res) =>{
        try{
            let {body} = req
            let hotel = await HotelService.create(body)
            res.json({flag:true,data:hotel})
        }
        catch(e){
            res.json({flag:true,message:e.message})
        }
    },
    updateHotel : async(req,res) =>{
        try{
            let {body,params} = req
            if(_.isEmpty(body)) throw new Error("nothing here to update")
            let user = await HotelService.update(body,params.id)
            res.json({flag:true,data:user})
        }
        catch(e){
            res.json({flag:true,message:e.message})
        }
    }
}