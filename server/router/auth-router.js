const express = require("express");
const router = express.Router();
const auhtControllers = require("../controllers/auth.controllers")
const authValidator = require("../validator/auth-validator")
const validate = require("../middlewares/validate_middleware")
const authMiddleware = require("../middlewares/auth-middleware")

router.route("/").get(auhtControllers.home)

router.route('/register').post(validate(authValidator.signupSchema), auhtControllers.register);

router.route("/login").post(validate(authValidator.loginSchema), auhtControllers.login);

router.route("/user").get(authMiddleware, auhtControllers.user);

module.exports = router;