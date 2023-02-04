const { Contact } = require("../models/Contact");
const contactPageController = {
  sendData: (req, res) => {
    let newContact = {
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      note: req.body.note,
    };
    newContact.save((err, doc) => {
      if (!err) {
        res.json(doc);
      } else {
        res.status(500).json(err);
      }
    });
  },
};

module.exports = {
  contactPageController,
};