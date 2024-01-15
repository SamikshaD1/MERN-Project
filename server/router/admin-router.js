const express = require('express')
const adminControllers = require('../controllers/admin-controllers');
const router = express.Router();
const authMiddleware = require("../middlewares/auth-middleware")
const adminMiddleware = require("../middlewares/admin-midleware")

router.route('/users').get(authMiddleware, adminMiddleware, adminControllers.getAllUsers)

router.route('/users/delete/:id').delete(authMiddleware, adminMiddleware, adminControllers.deleteUserById)

router.route('/users/:id').get(authMiddleware, adminMiddleware, adminControllers.getUserById)

router.route('/contacts').get(authMiddleware, adminMiddleware, adminControllers.getAllContacts)

module.exports = router