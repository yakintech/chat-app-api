const { groupModel } = require('../models/Group');

const groupController = {
	getAll: (req, res) => {
		groupModel.find((err, doc) => {
			if (!err) res.json(doc);
			else res.status(500).json(err);
		});
	},
};

module.exports = {
	groupController,
};
