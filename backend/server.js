import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

import authrouter from "../backend/router/auth.route.js"
import messagerouter from "../backend/router/message.route.js"
import userrouter from "../backend/router/user.router.js"

import connectMongodb from "./db/connectMongodb.js"

const app =express()
const PORT=process.env.PORT || 5000

dotenv.config()
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authrouter)
app.use("/api/message",messagerouter)
app.use("/api/user",userrouter)

app.get("/",(req,res)=>{
    res.send("welcom to chat-app buddy")
})


app.listen(PORT,()=>{
    connectMongodb()
})
