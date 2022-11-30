module.exports = (sequelize,DateTypes) =>{
    const Users = sequelize.define('user',{
        mobile : {type:DateTypes.INTEGER,notNull:true},
        email : {type:DateTypes.STRING,notNull:true,unique:true},
        age : {type:DateTypes.INTEGER,notNull:true},
        name : {type:DateTypes.STRING,notNull:true},
        address : {type:DateTypes.STRING,notNull:true},
    })

    return Users;
}