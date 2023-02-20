const app = require('express')()

const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io")

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  }
});
require('dotenv').config()
const port = process.env.PORT
const cors = require('cors')
const bodyParser = require('body-parser')
const connect = require('./db/connect')
connect()




let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  //when ceonnect
  console.log("a user connected.");

  //take userId and socketId from user
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    io.emit("getUsers", users);
  });

  //send and get message
  socket.on("sendMessage", ({ senderId, receiverId, text }) => {
    const user = getUser(receiverId);
    io.to(user.socketId).emit("getMessage", {
      senderId,
      text,
    });
  });

  //when disconnect
  socket.on("disconnect", () => {
    console.log("a user disconnected!");
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});
app.use(bodyParser.json())
app.use(cors())
const registerRouter = require('./routes/signUpRouter');
const loginRouter = require('./routes/loginRouter');
const userListRouter = require('./routes/userListRoute')
const userRouter = require('./routes/userRouter')
const conversationRouter = require('./routes/conversationRouter')
const messagesRouter = require('./routes/messagesRouter')
app.use(registerRouter)
app.use(loginRouter)
app.use(userListRouter)
app.use(userRouter)
app.use("/conversation",conversationRouter)
app.use("/messages",messagesRouter)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
