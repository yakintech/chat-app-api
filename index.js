const express = require("express");
const { default: mongoose } = require("mongoose");
const { chatModel } = require("./models/Chat");
const { webUserModel } = require("./models/WebUser");
const app = express();

app.use(express.json());
app.use(express.urlencoded());

mongoose.connect('mongodb+srv://cagatay:jYjpMvn5WXivq4uh@cluster0.imfaisw.mongodb.net/chatdb')
    .then(res => {
        console.log('Connected!');
    })
    .catch(err => {
        console.log('Connection error!');
    })

const webUserRouter = require('./routes/webUserRouter');

app.use('/api/webusers', webUserRouter);


app.listen(8080);











// let chat = new chatModel({
//     message:'Hello Çağatay',
//     sender: {
//         id:'63da4a09a6c7240276e02e07',
//         name:'Akif'
//     },
//     receiver:{
//         id:'63da4a09a6c7240276e02e08',
//         name:'Çağatay'
//     }

// });

// chat.save();


// chatModel.find()
//     .populate('sender')
//     .populate('receiver')
//     .exec((err,docs) => {
//         console.log('Docs', docs);
//     })


