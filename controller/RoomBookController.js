const roomService = require("../Service/RoomService")
const _=require('lodash')
const HotelService = require("../Service/HotelService")
const RoomBookService = require("../Service/RoomBookService")
const UserService = require("../Service/UserService")
module.exports = {
    bookRoom : async (req,res) =>{
        try{
            let {body} = req
            await UserService.findOne({id:body.user_id})
            let hotel = await HotelService.findOne({name:body.hotel_name})
            let roomDetails  = await roomService.findOne({hotel_id:hotel.id,room_no:body.room_no})
            console.log(roomDetails)
            if(!roomDetails.avaliable) throw new Error("room is already book")
            let obj = {
                hotel_id : hotel.id,
                room_id: roomDetails.id,
                user_id : body.user_id
            }
            let bookRoom = await RoomBookService.create(obj)

            await roomService.update({avaliable:false},roomDetails.id)

            res.json({flag:true,data:bookRoom})
        }
        catch(e){
            console.log(e)
            if(e.message == "Validation error") return res.json({flag:true,message:`room already book`})
            return res.json({flag:true,message:e.message})
        }
    }
}