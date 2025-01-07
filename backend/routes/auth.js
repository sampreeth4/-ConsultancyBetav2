const express = require("express");
const { check } = require("express-validator");
const verifyToken = require("../middleware/auth");
const AuthController = require("../controllers/AuthController");

const router = express.Router();

// Login
router.post(
  "/login",
  [
    check("email", "Email is required").isEmail(),
    check(
      "password",
      "Password with 6 or more characters is required"
    ).isLength({ min: 6 }),
  ],
  AuthController.login
);

// Validate token
router.get("/validate-token", verifyToken, (req, res) => {
  res.status(200).send({ userId: req.userId });
});

// Logout
router.post("/logout", AuthController.logout);


module.exports = router;
