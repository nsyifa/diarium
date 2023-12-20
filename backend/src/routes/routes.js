const express = require("express");
const router = express.Router();
const Controller = require("../controllers/Controller");

// Define your routes
router.get("/user", Controller.getUsers);
router.post("/user", Controller.createUser);
router.get("/user/:email", Controller.getUserByEmail);
// Add more routes as needed

module.exports = router;
