const express = require("express")
const dotenv = require("dotenv")
const ejs = require('ejs')
const path = require('path')
const router = require('./routes/route.js')

dotenv.config()

const app = express()
app.use(express.urlencoded())
app.set('view engine', 'ejs')
app.use(express.static(path.resolve(__dirname, 'views')))
app.use( router)


const PORT = process.env.PORT || 3000

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`server started on port: ${PORT}`)
})