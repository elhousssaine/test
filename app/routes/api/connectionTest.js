const express = require("express");
const router = express.Router();

// @route GET api/testconnection
// @desc test connection
// @access Public
router.get("/test", (req, res) => {
  console.log("API GET is reached");
  res.send({ message: "Successful Connection", success: true });
});

module.exports = router;
