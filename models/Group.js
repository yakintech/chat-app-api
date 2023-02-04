const { default: mongoose } = require('mongoose');

const { Schema } = mongoose;

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

const groupModel = mongoose.model('Group', groupSchema);

module.exports = {
	groupModel,
};
