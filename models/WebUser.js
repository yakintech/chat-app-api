const { default: mongoose } = require("mongoose");

const { Schema } = mongoose

const webUserSchema = new Schema({
    email: String,
    password: String,
    socketId:String,
    isDeleted: {
        type: Boolean,
        default: false
    },
    addDate: {
        type: Date,
        default: Date.now()
    }
})


const webUserModel = mongoose.model('webuser', webUserSchema);

module.exports = {
    webUserModel
}