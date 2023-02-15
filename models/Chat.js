const { default: mongoose } = require("mongoose");
const { Schema } = mongoose;


const chatSchema = new Schema({
    message: String,
    senderId: {
        type: "ObjectId",
        ref: "webuser"
    },
    receiverId: {
        type: "ObjectId",
        ref: "webuser"
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

const chatModel = mongoose.model('chat', chatSchema);


module.exports = {
    chatModel
}