import Post from '../models/Post.js'

export const getAllPosts = async (req, res) => {
    const data=await Post.find()
         .then(items=>res.json(items))
         .catch(err=>console.log(err))
   res.send(data);
 }


 export const createPost= (req, res) => {
    const newPost = new Post({
      date: req.body.date,
      trucktype: req.body.trucktype,
      pickup: req.body.pickup,
      delivery: req.body.delivery,
      company: req.body.company,
      weight: req.body.weight,
      tel: req.body.tel,
      email: req.body.email,
      price : req.body.price,
      specialNotes: req.body.specialNotes,
      cmrCount: req.body.cmrCount,
      comment1: req.body.comment1,
      comment2: req.body.comment2,
      owner: req.body.owner,
      status: req.body.status
    })
    newPost
    .save()
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));

    res.send()
}

export const getPosts=(req, res) => {
    Post.find()
      .then((items) => res.json(items))
      .catch((err) => console.log(err));
  }


  export const deletePost=(req, res) => {
    console.log(req.params);
    Post.findByIdAndDelete({ _id: req.params.id })
      .then((doc) => console.log(doc))
      .catch((err) => console.log(err));
  }

  export const updatePost=(req, res) => {
    Post.findByIdAndUpdate(
      { _id: req.params.id },
      {
        status: req.body.status,
      },
    
    )
      .then((doc) => console.log(doc))
      .catch((err) => console.log(err));
  }
