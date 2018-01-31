
const express = require('express')
const app = express()
const badyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const user = require('./user/user')

app.use(cookieParser())
app.use(badyParser.json())
app.use('/api/user', user)
app.listen(3000, function () {
  console.log('done!')
})