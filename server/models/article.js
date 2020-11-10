const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
	title: {type: String, required: true, max: 100},
	description: {type: String, required: true},
	link: {type: String, required: true},
	upvotes: {type: Number, default: 0},
	comments: []
})

module.exports = mongoose.model('articles', articleSchema)