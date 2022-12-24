import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose';
import { getAllPosts,createPost,getPosts,deletePost,updatePost } from './controllers/PostController.js';
import { getAllUSers,createUser,getUsers,updateUser } from './controllers/UserControllers.js';


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const URI = 'mongodb+srv://sevak555:1122334455@cluster0.hoet41f.mongodb.net/loadboard?retryWrites=true&w=majority'
mongoose.set('strictQuery', false);
mongoose
  .connect(URI)
  .catch((err) => console.log(err));

// POSTS REQUEST

app.get("/", getAllPosts);
app.post("/create", createPost);
app.get("/posts", getPosts);
app.delete("/delete/:id", deletePost);
app.put("/update/:id", updatePost);

// USERS REQUEST
app.get("/", getAllUSers);
app.post("/register", createUser);
app.get("/users", getUsers);
app.put("/change/:id", updateUser);
  

app.listen(5000, function () {
 console.log("Express server is running");
});