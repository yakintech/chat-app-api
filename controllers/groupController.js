const { groupModel } = require('../models/Group');
const { webUserModel } = require('../models/WebUser');

const groupController = {
	getAll: async (req, res) => {

		let docs = await groupModel.find()
			.populate('users')
			.exec();

		let responseModel = [];

		docs.forEach(item => {
			let model = {
				id: item._id,
				name: item.name,
				createDate: item.createDate,
				members: []
			}

			model.members = item.users.map(item => item.email);
			responseModel.push(model);
		})
		return res.json(responseModel)

	},
	create: (req, res) => {
		let name = req.body.name;

		groupModel.findOne({ name: name }, (err, doc) => {
			if (!err) {
				if (!doc) {
					let group = new groupModel({
						name: name,
						users: req.body.users
					});

					group.save((saveErr, saveDoc) => {
						if (!saveErr) {
							res.status(201).json(saveDoc);
						}
						else {
							res.status(500).json(saveDoc)
						}
					})
				}
				else {
					res.status(422).json({ msg: "That is duplicate name!" });
				}
			}
			else {
				res.status(500).json(err);
			}
		})

	},
	getAll2: async (req, res) => {

		let docs = await groupModel.find().exec();


		let responseModel = [];
		docs.forEach(item => {

			let model = {
				id: item._id,
				name: item.name,
				createdDate: item.createDate,
				members: []
			}

			item.users.forEach(async user => {
				let result = await webUserModel.findById(user._id).exec();
				model.members.push(result.email);

			});

			responseModel.push(model);
		})


		res.send(responseModel);


	}
};

module.exports = {
	groupController,
};

let responseModel = [
	{
		id: 1,
		name: 'Group-1',
		createdDate: '01.01 13:44',
		members: ['cagatay@mail.com', 'akif@mail.com']
	},
	{
		id: 2,
		name: 'Group-2',
		createdDate: '11.04 03:44',
		members: ['cagatay@mail.com', 'akif@mail.com']
	}
]
