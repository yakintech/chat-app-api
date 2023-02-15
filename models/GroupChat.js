const { default: mongoose } = require("mongoose");
const { Schema } = mongoose;


const chatSchema = new Schema({
    message: String,
    senderId: {
        type: "ObjectId",
        ref: "webuser"
    },
    receiverGroupId: {
        type: "ObjectId",
        ref: "Group"
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

const groupChatModel = mongoose.model('groupChat', chatSchema);


module.exports = {
    groupChatModel
}