const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cros = require('cors')
require('dotenv/config');

app.use(cros())
app.use(bodyParser.json());
// //Middlewares
// app.use('/post',()=>{
//     console.log('This is middewares running')
// })
//Import Router 
const postsRoute = require('./routes/posts');
app.use('/postss',postsRoute);


//ROUTES
app.get('/',(req,res)=>{
    res.send('We are on home'); 
})
app.get("/sasa", async (req, res) => {
    try {
      const posts = await Post.find();
      res.json(posts);
    } catch (err) {
      res.json({ message: err });
    }
  });
  //Sumbit a post
  router.post("/", async (req, res) => {
    //   console.log(req.body)
    const post = new Post({
      title: req.body.title,
      description: req.body.description
    });
  
    try {
      const savedPost = await post.save();
      res.json(savedPost);
    } catch (err) {
      res.json({ message: err });
    }
  });
//Connect TO DB
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true , useCreateIndex:true},()=>console.log('conected to DB'));

//How to we start lsitening to the server
app.listen(process.env.PORT || 3000);