require('dotenv').config()
const express = require('express')
const app = express()
const connectDBMongoose = require('./mongoose')
const connectDBMongo = require('./mongo')
const PORT = process.env.PORT || 1337

connectDBMongoose()

app.listen(PORT, () => {
  console.log(`app connected to port: ${PORT}`)
})