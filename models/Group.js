const { default: mongoose } = require('mongoose');

const { Schema } = mongoose;

const groupSchema = Schema({
	name: {
		type: String,
		required: true,
	},
	users: {
		type: Array,
		required: true
	},
	isDeleted: {
		type: Boolean,
		default: false
	},
	createDate: {
		type: Date,
		default: Date.now()
	}
});

const groupModel = mongoose.model('Group', groupSchema);

module.exports = {
	groupModel,
};
