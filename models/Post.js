import mongoose from "mongoose"

const postSchema = mongoose.Schema({
    date: String,
    trucktype: String,
    pickup: String,
    delivery: String,
    company:String,
    weight: String,
    tel: String,
    email: String,
    specialNotes: String,
    price : String,
    cmrCount:String,
    comment1: String,
    comment2: String,
    owner: String,
    status: String
  });
  
 const Post = mongoose.model("Post", postSchema);
 export default Post
