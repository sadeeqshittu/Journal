const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
	username: { type: String, required:true, unique: true ,max:50},
	password: {type: String, required: true}
})


module.exports = mongoose.model('users', UserSchema);