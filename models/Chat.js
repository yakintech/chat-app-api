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
        refPath: 'receiverModel'
    },
    receiverModel: {
        type: String,
        enum: ['webuser', 'Group'],
        required: true
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