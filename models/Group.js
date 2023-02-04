const { Schema, default: mongoose } = require('mongoose');

const groupSchema = Schema({
	groupName: {
		type: String,
		required: true,
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

const group = mongoose.model('Group', groupSchema);

module.exports = {
	group,
};
