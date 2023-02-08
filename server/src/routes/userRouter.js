const { Router } = require("express");
const app = Router();
const uploadMiddleWares = require("../middleware/uploadMiddleWares");
const userControllers = require("../controllers/userControllers")

app.post("/profile/:id", uploadMiddleWares.avatarUpload, userControllers.uploadAvatar);

app.get("/profile/:id",userControllers.getUserDetails);

// app.put("/changepassword",userControllers.changePassword);

module.exports = app;
