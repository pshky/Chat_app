const mongoose = require('mongoose')
const { Schema } = mongoose;

const usersSchema = new Schema({
    name: {type:String, required: true},
    email: {type:String, required: true},
    password:  {type:String, required: true},
    phoneNumber: {type:Number, required: true},
    country:  {type:String, required: true},
    avatarFileName: {type:String},
    // userID: { type: String, required: true },
  },
  { collection: 'users' });

module.exports= mongoose.model('Users', usersSchema);
