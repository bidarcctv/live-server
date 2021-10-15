require('dotenv').config()

const mongoose = require("mongoose")
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const cors = require('cors')

const UserRouter = require('./routes/user')
const ReceiptRouter = require('./routes/receipts')

app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

const port = process.env.PORT || 3000;


app.use('/api', UserRouter)
app.use('/api', ReceiptRouter)


mongoose.connect(process.env.DATABASE, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }).then(() => {
    console.log('DB is connected');
})

app.listen(port, () => {
    console.log(`server listening at ${port}`)
})