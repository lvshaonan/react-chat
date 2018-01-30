/**
 * Created by Administrator on 2018/1/30.
 */
const mongoose = require('mongoose')

const DB_URL = 'mongodb://localhost:27017/react-chat'

mongoose.connect(DB_URL)

mongoose.connection.on('connected', function () {
  console.log('success')
})

const models = {
  user: {
    user: {type: String, require: true},
    pwd: {type: String, require: true},
    type: {type: String, require: true},
    avatar: {type: String}
  }
}

for (let m in models){
  mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
  getModel: function (name) {
    return mongoose.model(name)
  }
}