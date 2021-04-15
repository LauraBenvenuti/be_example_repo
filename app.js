// require dotenv - allows us to store secret data inside of a .env file
require('dotenv').config()
// require express - we will need this for our server
const express = require('express')
// create an instance of express under the variable name app
const app = express()
// require express-handlebars for our templating
const exprshbs = require('express-handlebars')
// import our exported connect db function written in the ./mongoose file
const connectDBMongoose = require('./config/mongoose')
// require our path module
const path = require('path')
// set a default port for localhost 1337 - or if a port is provided by our .env
const PORT = process.env.PORT || 1337

// we call our connect to DB func. once inside our app.js
connectDBMongoose()

// set our public folder to serve our static files such as client side js and css
app.use(express.static('public'))
// set our views folder
app.set('views', path.join(__dirname, 'views'))
// set our view engine
app.engine('handlebars', exprshbs())
app.set('view engine', 'handlebars')
// when the user navigates to our home url - the home template is being rendered
app.get('/', (req, res) => {
  res.render('home')
})


app.listen(PORT, () => {
  console.log(`app connected to port: ${PORT}`)
})