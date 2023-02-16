const { contactModel } = require("../models/ContactPage");

const contactController = {
  add: (req, res) => {
    let newContact = new contactModel({
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      note: req.body.note,
    });
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
  contactController,
};
