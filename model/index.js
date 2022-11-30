const {Sequelize,DataTypes} = require('sequelize')
const fs = require('fs')
const path = require('path')
const basename = path.basename(__filename);
let sequelize = new Sequelize("postgres","postgres","postgres",{
    dialect:"postgres",
    schema:"hotel",
    host:"localhost",
    port:5432
})
let db = {}
fs.readdirSync(__dirname)
  .filter(file=>{
    return (file.indexOf(".") !==0 && file !==basename && file.slice(-3) === ".js")
  }).forEach(file=>{
    let model = require("./"+file)(sequelize,DataTypes)
    db[model.name] = model
})

Object.keys(db).forEach(modelName=>{
    if(db[modelName].associate){
        db[modelName].associate(db)
    }
})


sequelize.authenticate().then(v=>{
    console.log("Database connect")
}).catch(e=>{
    console.log("Database failed",e)
})

sequelize.sync()


db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
// console.log(files)



