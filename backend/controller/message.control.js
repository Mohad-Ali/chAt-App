import conversetionModel from "../models/conversetion.model.js"
import messageModel from "../models/message.model.js"
import { getReceiverSocketId, io } from "../socket/socket.js"

export const sendMessage = async(req,res)=>{
   try {
    const {message} =req.body
    const {id:receiverId} = req.params
    const senderId = req.user._id

let conversetion=await conversetionModel.findOne({
    participants:{$all :[senderId,receiverId]}
})

if(!conversetion){
   conversetion = await conversetionModel.create({
      participants:[senderId,receiverId]
   })
}
const newMessage = new messageModel({
   senderId,
   receiverId,
   message
})

if(newMessage){
   conversetion.message.push(newMessage._id)
}

// await conversetion.save()
// await newMessage.save()
await Promise.all([conversetion.save(),newMessage.save()])

const receiverSocketId = getReceiverSocketId(receiverId);
if(receiverSocketId){
   io.to(receiverSocketId).emit("newMessage",newMessage)
}

res.status(200).json(newMessage);

   } catch (error) {
    console.log("error in sendmessage",error.message)
    res.status(500).json({error:"internal server error"})
   }
}

export const getMessage=async(req,res)=>{
   try {
      const { id:userToCharId }=req.params;
      const senderId= req.user._id;

      const conversetion = await conversetionModel.findOne({
         participants:{$all : [senderId,userToCharId]},
      }).populate("message");

      if(!conversetion) return res.status(200).json([])

      const message = conversetion.message

      res.status(200).json(message)  

   } catch (error) {
      console.log("error in getmessage",error.message)
      res.status(500).json({error:"internal server error"})
   }
}