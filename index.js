const express = require("express");
const { default: mongoose } = require("mongoose");
const { chatModel } = require("./models/Chat");
const { webUserModel } = require("./models/WebUser");

const app = express();
app.use(express.json());
app.use(express.urlencoded())

const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
        origin: '*',
    }
});


io.on('connection', (socket) => {

    console.log('socket', socket.id);

    socket.on('chatmessage', (data) => {
        io.emit("chatmessage2", data);
    })
  })

const webUserRouter = require('./routes/webUserRouter');
const groupsRouter = require('./routes/groupsRouter');

app.use('/api/webusers', webUserRouter);
app.use('/api/groups', groupsRouter);




server.listen(8088, () => {
    console.log('listening on *:8088');
});




