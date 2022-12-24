// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");

// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cors());

//DB configs
// const URI = 'mongodb+srv://sevak555:1122334455@cluster0.hoet41f.mongodb.net/loadboard?retryWrites=true&w=majority'
// mongoose.set('strictQuery', false);
// mongoose
//   .connect(URI)
//   .catch((err) => console.log(err));

// const postSchema = mongoose.Schema({
//   date: String,
//   trucktype: String,
//   pickup: String,
//   delivery: String,
//   company:String,
//   weight: String,
//   tel: String,
//   email: String,
//   specialNotes: String,
//   price : String,
//   cmrCount:String,
//   comment1: String,
//   comment2: String,
//   owner: String,
//   status: String
// });

// const Post = mongoose.model("Post", postSchema);

// app.get("/",async (req, res) => {
//    const data=await Post.find()
//         .then(items=>res.json(items))
//         .catch(err=>console.log(err))
//   res.send(data);
// });

// app.post("/create", (req, res) => {
//   const newPost = new Post({
//     date: req.body.date,
//     trucktype: req.body.trucktype,
//     pickup: req.body.pickup,
//     delivery: req.body.delivery,
//     company: req.body.company,
//     weight: req.body.weight,
//     tel: req.body.tel,
//     email: req.body.email,
//     price : req.body.price,
//     specialNotes: req.body.specialNotes,
//     cmrCount: req.body.cmrCount,
//     comment1: req.body.comment1,
//     comment2: req.body.comment2,
//     owner: req.body.owner,
//     status: req.body.status
//   });

//   newPost
//     .save()
//     .then((doc) => console.log(doc))
//     .catch((err) => console.log(err));

//     res.send()
// });

// app.get("/posts", (req, res) => {
//   Post.find()
//     .then((items) => res.json(items))
//     .catch((err) => console.log(err));
// });

// app.delete("/delete/:id", (req, res) => {
//   console.log(req.params);
//   Post.findByIdAndDelete({ _id: req.params.id })
//     .then((doc) => console.log(doc))
//     .catch((err) => console.log(err));
// });

// app.put("/update/:id", (req, res) => {
//   Post.findByIdAndUpdate(
//     { _id: req.params.id },
//     {
//       status: req.body.status,
//     },
  
//   )
//     .then((doc) => console.log(doc))
//     .catch((err) => console.log(err));
// });

// app.listen(5000, function () {
//   console.log("Express server is running");
// });
