const express = require("express");
const router = express.Router();
const Message = require("../../models/Message");
const validateAddMsgInput = require("../../validation/msg");

// @route POST api/messages/add
// @desc POST message
// @access Public
router.post("/add", (req, res) => {
  console.log("API POST message is reached");
  const { errors, isValid } = validateAddMsgInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const newMsg = new Message({
    name: req.body.name,
    email: req.body.email,
    body: req.body.body,
  });
  newMsg
    .save()
    .then((msg) => res.json(msg))
    .catch((err) => console.log(err));
});

// @route GET api/messages/getall/:num
// @desc GET message
// @access Private
router.get("/getall/:num", (req, res) => {
  console.log("API GET message all is reached");
  const num = parseInt(req.params.num);
  console.log(num - 1);
  if (num >= 0)
    Message.find()
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
  else
    Message.find()
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

// @route GET api/messages/getby/name/:name
// @desc GET message
// @access Private
router.get("/getby/name/:name", (req, res) => {
  console.log("API GET message by name is reached");
  const name = req.params.name;
  Message.find({ name: name })
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

// @route GET api/messages/getby/email/:email
// @desc GET message
// @access Private
router.get("/getby/email/:email", (req, res) => {
  console.log("API GET message by email is reached");
  const email = req.params.email;
  Message.find({ email: email })
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

module.exports = router;
