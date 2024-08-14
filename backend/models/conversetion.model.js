import mongoose from "mongoose";

const conversetionschema = new mongoose.Schema({
    participants:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ],
    message:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Message",
            default:[]
        }
    ]
},{timestamps:true})

const conversetionModel = mongoose.model("Conversetion",conversetionschema)
export default conversetionModel;