const express = require('express')
const app = express()
const db = require('./model')
const UserRoutes = require('./routes/UserRoutes')
const RoomBookRoutes = require('./routes/RoomBookRoutes')
const roomsRoutes = require('./routes/RoomRoutes')
const HotelRoutes = require('./routes/HotelRoutes')
const bodyParser = require('body-parser')
const UserService = require('./Service/UserService')
const _ = require('lodash')

app.use(bodyParser.json())

app.use("/users",UserRoutes)
app.use("/room/book",RoomBookRoutes)
app.use("/hotels",HotelRoutes)
app.use("/rooms",roomsRoutes)


app.listen(5000,()=>{
    console.log("server start")
})