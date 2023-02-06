const { groupsModel } = require("../models/Groups");

const groupsController = {
  getGroups: (req, res) => {
    groupsModel.find({ isDeleted: false }, (err, docs) => {
      if (!err) res.json(docs);
      else res.status(500).json(err);
    });
  },
  createGroup: (req, res) => {
    var query = { name: req.body.name };

    groupsModel.find(query, (err, doc) => {
      let newGroup = new groupsModel({
        name: req.body.name,
        users: req.body.users,
      });

      newGroup.save(function (err, doc) {
        if (!err) {
          res.status(201).json(doc);
        } else {
          res.status(500).json({ msg: "That is duplicate name!" });
        }
      });
    });
  },
};
module.exports = {
  groupsController,
};
