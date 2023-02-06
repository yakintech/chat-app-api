const { chatModel } = require("../models/Chat");

const chatHistoryController = {
  sendData: (req, res) => {
    let senderId = req.query.senderId;
    chatModel.find({ "sender.id": senderId }).then((r) => {
      res.send(r);
    });
  },
};

module.exports = {
  chatHistoryController,
};
