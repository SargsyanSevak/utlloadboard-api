import User from "../models/User.js"

export const getAllUSers = async (req, res) => {
    const data = await User.find()
         .then(items=>res.json(items))
         .catch(err=>console.log(err))
   res.send(data);
 }

export const createUser=(req, res) => {
    const newPost = new User({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      tell: req.body.tell,
      password: req.body.password,
    });
  
    newPost
      .save()
      .then((doc) => console.log(doc))
      .catch((err) => console.log(err));
  
      res.send()
  }

  export const getUsers= (req, res) => {
    User.find()
      .then((items) => res.json(items))
      .catch((err) => console.log(err));
  }

  export const updateUser=(req, res) => {
    User.findByIdAndUpdate(
      { _id: req.params.id },
      {
        password: req.body.password,
      },
    )
      .then((doc) => console.log(doc))
      .catch((err) => console.log(err));
  }