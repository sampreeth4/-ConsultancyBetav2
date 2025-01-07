const express = require("express");
const { check} = require("express-validator");
const MyUserController = require("../controllers/MyUserController");
const router = express.Router();

// Register
router.post(
  "/register",
  [
    check("name", "Name is required").isString(),
    check("email", "Email is required").isEmail(),
    check("password", "Password with 6 or more characters required").isLength({
      min: 6,
    }),
  ],
  MyUserController.createCurrentUser
);


module.exports = router;
