const { groupModel } = require('../models/Group');
const { webUserModel } = require('../models/WebUser');

const groupController = {
	getAll: async (req, res) => {
		let docs = await groupModel.find().exec();

		let responseModel = [];

		docs.forEach(item => {
			let model = {
				id: item._id,
				createDate: item.createDate,
				name: item.name,
				members: []
			};

			console.log('1');
			item.users.forEach(async userId => {
				console.log('2');

				await webUserModel.findById(userId)
					.then(res => {
						console.log('3');
						model.members.push(res.email);
					})
					.catch(findErr => {
						res.status(500).json(findErr)
					})
				console.log('4');
			})

			console.log('5');
			responseModel.push(model)
		})

		res.json(responseModel);

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
