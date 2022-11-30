module.exports = (sequelize,DateTypes) =>{
    const roomBooking = sequelize.define('room_booking',{
        room_id : {type:DateTypes.INTEGER,notNull:true,unique:"room_booking_unique"},
        user_id : {type:DateTypes.INTEGER,notNull:true},
        hotel_id : {type:DateTypes.INTEGER,notNull:true,unique:"room_booking_unique"}
        })

        roomBooking.associate = (model)=>{
            roomBooking.belongsTo(model.user,{
                targetKey: "id",
                foreignKey: "user_id"
            }),
            
            roomBooking.belongsTo(model.hotel,{
                targetKey: "id",
                foreignKey: "hotel_id"
            })
        }

    return roomBooking;
}