/**
 * Created by Administrator on 2018/1/30.
 */
const express = require('express')

const Router = express.Router()

const model = require('../model')

const User = model.getModel('user')

Router.get('/info', function (req, res) {
  res.json({code: 1})
})

Router.post('/login', function (req, res) {
  const {user, pwd} = req.body
  User.findOne({user, pwd}, function (err, doc) {
    if(!doc){
      return res.json({code: 1, msg: '用户名或密码错误！'})
    }
    return res.json({code: 0, data: doc})
  })
})

Router.post('/register', function (req, res) {
  var {user, pwd, type} = req.body
  User.findOne({user},function(err,doc){
    if (doc) {
      return res.json({code:1,msg:'用户名重复'})
    }
    var userModel = new User({user,type,pwd})
    userModel.save(function(e,d){
      if (e) {
        return res.json({code:1,msg:'后端出错了'})
      }
      var {user, type, _id} = d
      return res.json({code:0,data:{user, type, _id}})
    })
  })
})


module.exports = Router