import { Schema, model } from "mongoose";

const commentMenuSchema = new Schema({
    menu_id:{
        type:Schema.Types.ObjectId,
        ref:"MenuItem",
    },
    user_id:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },
    content:{
        type:String,
        maxlength:[255,"Password must be less than 255 characters long"],
        minlength:[3,"Password must be at least 3 characters long"],
    },
    likeCount:{
        type:Number,
        default:0,
    },
    dislikeCount:{
        type:Number,
        default:0,
    },

},
{
    timestamps:true,
    versionKey:false,
    collection:"menu_comments",
})
export default model("CommentMenu", commentMenuSchema);
