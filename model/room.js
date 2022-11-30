module.exports = (sequelize,DateTypes) =>{
    const Room = sequelize.define('room',{
        type : {type:DateTypes.STRING,notNull:true},
        room_no : {type:DateTypes.STRING,notNull:true,unique:"roomUnique"},
        avaliable : {type:DateTypes.BOOLEAN,default:true},
        room_rent : {type:DateTypes.INTEGER,notNull:true},
        hotel_id : {type:DateTypes.INTEGER,notNull:true,unique:"roomUnique"}
        })

        Room.associate = (model)=>{
            Room.belongsTo(model.hotel,{
                targetKey: "id",
                foreignKey: "hotel_id"
            })
        }
    return Room;
}