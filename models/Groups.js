const { default: mongoose } = require("mongoose");

const { Schema } = mongoose

const groupSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique:true
        },
        users: {
            type: Array,
            required: true
        },
        isDeleted: {
            type: Boolean,
            default: false
        },
        createDate: {
            type: Date,
            default: Date.now()
        }
    }
)


const groupsModel = mongoose.model('groups', groupSchema);

module.exports = {
    groupsModel
}