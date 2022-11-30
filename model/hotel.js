module.exports = (sequelize,DateTypes) =>{
    const Hotel = sequelize.define('hotel',{
        type: {type:DateTypes.STRING,notNull:true},
        name: {type:DateTypes.STRING,notNull:true,unique:true},
        address : {type:DateTypes.STRING,notNull:true}
       })

    return Hotel;
}