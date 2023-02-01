const { default: mongoose } = require("mongoose");
const { Schema } = mongoose;


const chatSchema = new Schema({
    message: String,
    date: {
        type: Date,
        default: Date.now()
    },
    sender: {},
    receiver: {}
})

const chatModel = mongoose.model('chat', chatSchema);

module.exports = {
    chatModel
}



let responseModel = [
    {
        sender:'Çağatay',
        receiver:'Ali',
        message:'Hello',
        date:'13:45'
    }
]