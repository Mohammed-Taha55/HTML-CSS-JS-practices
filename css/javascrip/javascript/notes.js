// import mongoose from "mongoose";
// const userSchema = new mongoose.Schema({
//     name : String,
//     email : String
// })
// const user = mongoose.model("user", userSchema)
// export default user

//router 

import express from 'express'

const app = express()

app.get("/",(req, res) => {
    res.json({
        message: "this is working"
    })
})

app.listen(3000)
