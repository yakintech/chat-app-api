const { chatModel } = require("../models/Chat");

const chatHistoryController = {
  sendData: (req, res) => {
    let senderId = req.query.senderId;
    chatModel.find({ "sender.id": senderId }).then((r) => {
      res.send(
        r.map((message) => {
          return {
            sender: message.sender.name,
            receiver: message.receiver.name,
            message: message.message,
            date: message.date,
          };
        })
      );
    });
  },
};

module.exports = {
  chatHistoryController,
};
