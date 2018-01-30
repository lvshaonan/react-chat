
const express = require('express')
const app = express()
const badyParser = require('body-parser')
const user = require('./user/user')


app.use(badyParser.json())
app.use('/api/user', user)
app.listen(3000, function () {
  console.log('done!')
})