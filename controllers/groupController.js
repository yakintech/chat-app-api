const { groupModel } = require('../models/Group');

const groupController = {
	getAll: (req, res) => {
		groupModel.find((err, doc) => {
			if (!err) res.json(doc);
			else res.status(500).json(err);
		});
	},
	create: (req,res) => {
		let name = req.body.name;

		groupModel.findOne({name:name}, (err, doc) => {
			if(!err){
				if(!doc){
					let group = new groupModel({
						name:name,
						users: req.body.users
					});

					group.save((saveErr,saveDoc) => {
						if(!saveErr){
							res.status(201).json(saveDoc);
						}
						else{
							res.status(500).json(saveDoc)
						}
					})
				}
				else{
					res.status(422).json({ msg: "That is duplicate name!" });
				}
			}
			else{
				res.status(500).json(err);
			}
		})

	}
};

module.exports = {
	groupController,
};
