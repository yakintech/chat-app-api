const { group } = require('console');
const { groupModel } = require('../models/Group');
const { webUserModel } = require('../models/WebUser');

const groupController = {
	getAll: async (req, res) => {
		let docs = await groupModel.find({ isDeleted: false }).populate('users').exec();

		let responseModel = [];

		docs.forEach((item) => {
			let model = {
				id: item._id,
				name: item.name,
				createDate: item.createDate,
				members: [],
			};

			model.members = item.users.map((item) => item.email);
			responseModel.push(model);
		});
		return res.json(responseModel);
	},
	create: (req, res) => {
		let name = req.body.name;
		groupModel.findOne({ name: name }, (err, doc) => {
			if (!err) {
				if (!doc) {
					let group = new groupModel({
						name: name,
						users: req.body.users,
					});

					group.save((saveErr, saveDoc) => {
						if (!saveErr) {
							res.status(201).json(saveDoc);
						} else {
							res.status(500).json(saveDoc);
						}
					});
				} else {
					res.status(422).json({ msg: 'That is duplicate name!' });
				}
			} else {
				res.status(500).json(err);
			}
		});
	},
	getAll2: async (req, res) => {
		let docs = await groupModel.find().exec();
		let responseModel = [];
		docs.forEach((item) => {
			let model = {
				id: item._id,
				name: item.name,
				createdDate: item.createDate,
				members: [],
			};

			item.users.forEach(async (user) => {
				let result = await webUserModel.findById(user._id).exec();
				model.members.push(result.email);
			});
			responseModel.push(model);
		});

		res.send(responseModel);
	},
	remove: (req, res) => {
		let id = req.params.id;
		groupModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true }, (err, doc) => {
			if (!err) {
				res.send(doc);
			} else {
				res.send('errr');
				res.status(500).json(err);
			}
		});
	},
};

module.exports = {
	groupController,
};
