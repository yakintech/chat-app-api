const { groupSchema } = require('../models/Group');

const groupController = {
	getAll: (req, res) => {
		groupSchema.find((err, doc) => {
			if (!err) res.json(docs);
			else res.status(500).json(err);
		});
	},
};

module.exports = {
	groupController,
};
