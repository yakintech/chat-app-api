const { groupChatModel } = require("../models/GroupChat");

const groupChatController = {
    getAll: (req, res) => {
        groupChatModel.find({ isDeleted: false }).populate("senderId receiverGroupId").exec((err, docs) => {
            if (!err) {
                res.json(docs)
            } else {
                res.status(500).json(err);
            }
        })
    },
    add: (req, res) => {
        let { message, senderId, receiverGroupId } = req.body;
        let newMessage = new chatModel({ message, senderId, receiverGroupId });
        newMessage.save(function (err, doc) {
            if (!err) {
                res.json(doc);
            } else {
                res.status(500).json(err);
            }
        })
    }
}

module.exports = {
    groupChatController
}