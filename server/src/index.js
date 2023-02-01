const app = require('express')()
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
const userProfileRoute = require('./routes/userProfileRoute')
app.use(registerRouter)
app.use(loginRouter)
app.use(userListRouter)
app.use(userProfileRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
