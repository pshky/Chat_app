const { Router } = require("express");
const app = Router();
const bcrypt = require('bcrypt');
const Users = require("../models/users");
const uploadMiddleWares = require("../middleware/uploadMiddleWares")

app.post("/profile/:id",uploadMiddleWares.avatarUpload, async (req, res, next) => {
    try {
      const data = await Users.findByIdAndUpdate(
        { _id: req.params.id },
        { avatarFileName: req.file.originalname }
      );
      if (data) {
        res.json({
          msg: "avatar upload success!!",
        });
      }
    } catch (err) {
      console.log(err);
    }
  })

  app.get("/profile/:id",async (req, res) => {
    try {
      const userData = await Users.findById(req.params.id)
      const {password, __v, ...refactoredData} = userData.toObject()
     
      res.json({
        user: refactoredData,
      });
    } catch (err) {
      console.log(err);
    }
  })

module.exports = app;