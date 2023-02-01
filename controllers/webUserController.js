const { webUserModel } = require("../models/WebUser")


const webUserController = {
    getAll: (req, res) => {
        webUserModel.find({ isDeleted: false }, (err, docs) => {
            if (!err)
                res.json(docs)
            else
                res.status(500).json(err);
        })
    }
}

module.exports = {
    webUserController
}

