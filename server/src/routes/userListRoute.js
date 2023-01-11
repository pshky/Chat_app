const { Router } = require('express');
const Users = require('../models/users')
const app = Router();
const bcrypt = require('bcrypt');

app.get('/userlist', async(req, res) => {
    try{
    const data = await Users.find()
    if(data){
        res.json({
            userList: data
        })
    }
    }catch(err){
        console.log(err)
    }
})


module.exports = app;