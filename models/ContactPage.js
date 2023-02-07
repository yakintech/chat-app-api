const { default: mongoose } = require("mongoose");
const { Schema } = mongoose;


const contactSchema = new Schema({
    name: String,
    surname: String,
    email: {
        type:String,
        required: true
    },
    note:String,
    isDeleted: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now()
    }
})
const contactModel = mongoose.model('contact', contactSchema);

module.exports = {
    contactModel 
}