const express = require("express");
const { default: mongoose } = require("mongoose");
const webUserRouter = require("./routes/webUserRouter");
const chatHistoryRouter = require("./routes/chatHistoryRouter");
const groupRouter = require("./routes/groupRouter");
var jwt = require('jsonwebtoken');

var cors = require('cors')

const app = express();
app.use(express.json());
app.use(express.urlencoded())
app.use(cors())

const http = require('http');
const server = http.createServer(app);

let privateKey = "ironmaidenironmaidenironmaidenironmaiden";

app.use((req, res, next) => {

  if (req.url == '/api/webusers/login' || req.url == '/api/webusers/confirmCode') {
   return next();
  }

  let auth = req.headers.authorization?.split(' ');
  let token = '';

  if (auth) {
    if (auth.length == 2) {
      token = auth[1];
    }
    else {
      res.status(401).json({ 'message': 'Access Error!' })
    }
  }
  else {
    res.status(401).json({ 'message': 'Access Error!' })
  }



  jwt.verify(token, privateKey, function (err, decode) {
    if (err) {
      res.status(401).json(err);
    }
    else {
      next()
    }
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



app.use("/api/webusers", webUserRouter);
app.use("/api/chatHistory", chatHistoryRouter);
app.use('/api/groups', groupRouter)



server.listen(8080, () => {
  console.log('listening on *:8088');
});






