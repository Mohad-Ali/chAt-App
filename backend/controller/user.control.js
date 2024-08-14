import userModel from "../models/user.model.js"

export const getUsersForSidebar=async(req,res)=>{
    try {
        const loggedInUser= req.user._id
        const filterUser  = await userModel.find({ _id:{$ne:loggedInUser}}).select("-password");

        res.status(200).json(filterUser)
        
    } catch (error) {
        console.log("error in getuserforsidebar:",error.message)
       res.status(500).json({error:"internal server error"}) 
    }

}