import path from "path"
import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

import authrouter from "../backend/router/auth.route.js"
import messagerouter from "../backend/router/message.route.js"
import userrouter from "../backend/router/user.router.js"

import connectMongodb from "./db/connectMongodb.js"
import { app, server } from "./socket/socket.js"


const PORT=process.env.PORT || 5000

const __dirname = path.resolve()

dotenv.config()
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authrouter)
app.use("/api/message",messagerouter)
app.use("/api/user",userrouter)

app.use(express.static(path.join(__dirname,"/frontend/dist")))

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
})


server.listen(PORT,()=>{
    connectMongodb()
})
