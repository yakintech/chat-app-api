const { Schema, default: mongoose } = require('mongoose');

const membersSchema = Schema({
	membersName: {
		type: String,
		required: true,
	},
	groupId: {
		type: 'ObjectId',
		ref: 'Group',
	},
	isDeleted: {
		type: Boolean,
		default: false,
	},
	date: {
		type: Date,
		default: Date.now(),
	},
});

const members = mongoose.model('Members', membersSchema);

module.exports = {
	members,
};
