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

app.use(bodyParser.json())
app.use(cors())

const registerRouter = require('./routes/signUpRouter');
const loginRouter = require('./routes/loginRouter');
const userListRouter = require('./routes/userListRoute')
const userRouter = require('./routes/userRouter')
const messagesRouter = require("./routes/messagesRouter");
app.use(registerRouter)
app.use(loginRouter)
app.use(userListRouter)
app.use(userRouter)
app.use(messagesRouter);

io.on("connection", (socket) => {
  console.log('qwe')
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    console.log("ss",data)
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
