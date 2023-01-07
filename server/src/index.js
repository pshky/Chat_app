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
app.use(registerRouter)
app.use(loginRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
