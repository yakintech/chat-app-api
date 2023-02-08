const express = require("express");
const { default: mongoose } = require("mongoose");
const webUserRouter = require("./routes/webUserRouter");
const chatHistoryRouter = require("./routes/chatHistoryRouter");
const groupRouter = require("./routes/groupRouter");

var cors = require('cors')



const app = express();
app.use(express.json());
app.use(express.urlencoded())
app.use(cors())

const http = require('http');
const server = http.createServer(app);

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



app.use("/api/webusers", webUserRouter);
app.use("/api/chatHistory", chatHistoryRouter);
app.use('/api/groups', groupRouter)



server.listen(8088, () => {
  console.log('listening on *:8088');
});






