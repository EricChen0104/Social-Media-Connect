const router = require("express").Router();
const registerValidation = require("../validation").registerValidation;
const loginValidation = require("../validation").loginValidation;
const User = require("../models").user;
const jwt = require("jsonwebtoken");

router.use((req, res, next) => {
  console.log("正在接收跟auth有關的請求");
  next();
});

router.get("/:_id", async (req, res) => {
  let { _id } = req.params;
  console.log(_id);
  let foundUser = await User.findOne({ _id });
  console.log(foundUser);
  return res.send({
    msg: "successfully get other profile",
    user: foundUser,
  });
});

module.exports = router;
