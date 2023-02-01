const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();

mongoose.connect('mongodb+srv://cagatay:jYjpMvn5WXivq4uh@cluster0.imfaisw.mongodb.net/chatdb')
    .then(res => {
        console.log('Connected!');
    })
    .catch(err => {
        console.log('Connection error!');
    })

const webUserRouter = require('./routes/webUserRouter');

app.use('/api/webusers', webUserRouter);


