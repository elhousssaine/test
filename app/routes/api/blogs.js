const express = require("express");
const Blog = require("../../models/Blog");
const router = express.Router();
const validateAddBlogInput = require("../../validation/blog");

// @route GET  api/blogs/getall/:num
// @desc Get blog
// @access Public
router.get("/getall/:num", (req, res) => {
  console.log("API GET api/blogs/:id is reached");
  const num = req.params.num;
  if (num >= 0)
    Blog.find({})
      .sort({ date: -1 })
      .limit(num)
      .exec((err, doc) => {
        if (err) {
          console.log(err);
          res.send(err);
        } else {
          res.send(doc);
        }
      });
  else {
    Blog.find({})
      .sort({ date: -1 })
      .exec((err, doc) => {
        if (err) {
          console.log(err);
          res.send(err);
        } else {
          res.send(doc);
        }
      });
  }
});

// @route GET api/blogs/get/:id
// @desc Get blog
// @access Public
router.get("/get/:id", (req, res) => {
  console.log("API GET api/blogs/:id is reached");
  const blogIdID = req.params.id;
  Blog.find({ _id: blogIdID })
    .sort({ date: -1 })
    .exec((err, doc) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send(doc);
      }
    });
});

// @route GET api/blogs/getbyonwer/:id
// @desc Get blog
// @access Public
router.get("/getbyonwer/:id", (req, res) => {
  console.log("API GET api/blogs/getbyowner/:id is reached");
  const ownerID = req.params.id;
  Blog.find({ author: ownerID })
    .sort({ date: -1 })
    .exec((err, doc) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send(doc);
      }
    });
});

// @route POST api/blogs/add
// @desc ADD blog
// @access Public
router.post("/add", (req, res) => {
  console.log("API Post api/blogs/add is reached");
  // Form validation
  const { errors, isValid } = validateAddBlogInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const newBlog = new Blog({
    title: req.body.title,
    author: req.body.author,
    body: req.body.body,
  });
  newBlog
    .save()
    .then((blog) => res.json(blog))
    .catch((err) => console.log(err));
});

module.exports = router;
