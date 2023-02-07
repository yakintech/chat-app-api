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

mongoose
  .connect(
    "mongodb+srv://cagatay:jYjpMvn5WXivq4uh@cluster0.imfaisw.mongodb.net/chatdb"
  )
  .then((res) => {
    console.log("Connected!");
  })
  .catch((err) => {
    console.log("Connection error!");
  });

const webUserRouter = require("./routes/webUserRouter");
const chatHistoryRouter = require("./routes/chatHistoryRouter")

app.use("/api/webusers", webUserRouter);
app.use("/api/chatHistory", chatHistoryRouter);




server.listen(8088, () => {
    console.log('listening on *:8088');
});




