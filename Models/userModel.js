const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
   title: String,
   description: String,
   time: Date,
   isCompleted:Boolean
}) 

const UserModel = mongoose.Model('users',UserSchema);

module.exports = UserModel;