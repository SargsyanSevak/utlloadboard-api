// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");

// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cors());

// //DB configs
// // const URI = 'mongodb+srv://sevak555:1122334455@cluster0.hoet41f.mongodb.net/loadboard?retryWrites=true&w=majority'
// // mongoose.set('strictQuery', false);
// // mongoose
// //   .connect(URI)
// //   .catch((err) => console.log(err));

// // const postSchema = mongoose.Schema({
// //   name: String,
// //   username: String,
// //   email: String,
// //   tell: String,
// //   password:String,
// // });

// // const Post = mongoose.model("User", postSchema);

// app.get("/",async (req, res) => {
//    const data=await Post.find()
//         .then(items=>res.json(items))
//         .catch(err=>console.log(err))
//   res.send(data);
// });

// app.post("/create", (req, res) => {
//   const newPost = new Post({
//     name: req.body.name,
//     username: req.body.username,
//     email: req.body.email,
//     tell: req.body.tell,
//     password: req.body.password,
//   });

//   newPost
//     .save()
//     .then((doc) => console.log(doc))
//     .catch((err) => console.log(err));

//     res.send()
// });

// app.get("/users", (req, res) => {
//   Post.find()
//     .then((items) => res.json(items))
//     .catch((err) => console.log(err));
// });


// app.put("/update/:id", (req, res) => {
//   Post.findByIdAndUpdate(
//     { _id: req.params.id },
//     {
//       password: req.body.password,
//     },
  
//   )
//     .then((doc) => console.log(doc))
//     .catch((err) => console.log(err));
// });

// app.listen(5005, function () {
//   console.log("Express server is running");
// });
