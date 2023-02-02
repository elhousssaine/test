const express = require("express");
const multer = require("multer");
const { v4: uuid4 } = require("uuid");
const router = express.Router();
const Project = require("../../models/Project");
const path = require("path");
const validateAddProjectInput = require("../../validation/project");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../app/public/images/");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      uuid4() +
        "-" +
        Date.now() +
        path.extname(file.originalname.toLowerCase().split(" ").join("-"))
    );
    console.log("after , ", file.originalname);
  },
});

const filefilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpg", "image/jpeg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
    return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
  }
};

let upload = multer({ storage: storage, fileFilter: filefilter });

// @route POST api/projects/add
// @desc add project
// @access Public
const MAX_IMG_COUNT = 5;
router.post("/add", upload.array("images", MAX_IMG_COUNT), (req, res, err) => {
  const files = req.files;

  const { errors, isValid } = validateAddProjectInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  let newPrjJSON = {
    title: req.body.title,
    owner: req.body.owner,
    cardType: req.body.cardType ? req.body.cardType : 0,
    parag1: req.body.parag1,
    parag2: req.body.parag2,
    hex1: req.body.hex1,
    hex2: req.body.hex2,
    hidden: req.body.hidden ? true : false,
  };

  let imgs_arr = [];
  Object.keys(files).map((key, index) => {
    imgs_arr.push({
      id: path.parse(files[key].filename).name,
      path_url: "/public/images/" + files[key].filename,
      ext: path.extname(files[key].originalname),
      alt: "Project Image",
    });
  });
  newPrjJSON.imgs = imgs_arr;

  const newProject = new Project(newPrjJSON);
  newProject
    .save()
    .then((project) => res.json(project))
    .catch((err) => console.log(err));
});

// @route GET api/projects/getall/:num
// @desc get project
// @access Public
router.get("/getall/:num", (req, res) => {
  console.log("API GET api/projects/getall/:num is reached");
  const num = parseInt(req.params.num);

  if (num < 0) {
    Project.find()
      .sort({ date: -1 })
      .exec((err, doc) => {
        if (err) {
          console.log(err);
          res.send(err);
        } else {
          res.send(doc);
        }
      });
  } else {
    Project.find()
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
  }
});

// @route GET api/projects/get/:id
// @desc get project
// @access Public
router.get("/get/:id", (req, res) => {
  console.log("API GET api/projects/get/:id is reached");
  const prjID = req.params.id;

  Project.find({ _id: prjID })
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
// @route GET api/projects/getbyowner/:id
// @desc get project
// @access Public
router.get("/getbyowner/:id", (req, res) => {
  const ownerID = req.params.id;
  console.log(`API GET api/projects/getbyowner/${ownerID} is reached`);

  Project.find({ owner: ownerID })
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
