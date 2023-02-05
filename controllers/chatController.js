const { chatModel } = require("../models/Chat");

const chatController = {
    add: (req, res) => {
        let { message, sender, receiver } = req.body;
        let newMessage = new chatModel({ message, sender, receiver });
        newMessage.save(function (err, doc) {
            if (!err) {
                res.json(doc);
            } else {
                res.status(500).json(err);
            }
        })
    },
    getAll: (req, res) => {
        chatModel.find({ isDeleted: false }).populate("senderId receiverId").exec((err, docs) => {
            if (!err) {
                res.json(docs)
            } else {
                res.status(500).json(err);
            }
        })
    }
}

module.exports = {
    chatController
}