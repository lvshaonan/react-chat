/**
 * Created by Administrator on 2018/1/30.
 */
import axios from 'axios'
import { getRedirectTo } from '../util'
const ERROR_MSG = 'ERROR_MSG'
const LOAD_DATA = 'LOAD_DATA'
const AUTH_SUCCESS = 'AUTH_SUCCESS'

const initState = {
  redirectTo: '',
  user: '',
  pwd: '',
  msg: '',
  type: ''
}

export function user(state=initState, action) {
  switch (action.type){
    case AUTH_SUCCESS:
      return Object.assign({}, state, {msg: '', redirectTo: getRedirectTo(action.payload)}, action.payload)
    case LOAD_DATA:
      return Object.assign({}, state, action.payload)
    case ERROR_MSG:
      return Object.assign({}, state, {isAuth: false, msg: action.msg})
    default:
      return state
  }
}

function authSuccess(data) {
  return {type: AUTH_SUCCESS, payload: data}
}

function errorMsg(msg) {
  return {msg, type: ERROR_MSG}
}

export function loadData(data) {
  return {type: LOAD_DATA, payload: data}
}

export function update(data) {
  return dispatch=>{
    axios.post('/api/user/update', data)
      .then(res => {
        if(res.data.code === 0){
          dispatch(authSuccess(res.data.data))
        }else {
          dispatch(errorMsg(res.data.msg))
        }
      })
  }
}

export function register({user, pwd, repeatpwd, type}) {
  if(!user || !pwd || !type){
    return errorMsg('请填写注册信息！')
  }
  if(pwd !== repeatpwd){
    return errorMsg('密码和确认密码必须相同！')
  }
  return dispatch => {
    axios.post('/api/user/register', {user, pwd, type})
      .then(res => {
        if(res.data.code === 0){
          dispatch(authSuccess({user, pwd, type}))
        }else {
          dispatch(errorMsg(res.data.msg))
        }
      })
  }
}

export function login({user, pwd}) {
  if(!user || !pwd){
    return errorMsg('请填写登录信息！')
  }
  return dispatch => {
    axios.post('/api/user/login', {user, pwd})
      .then(res => {
        if(res.data.code ===0){
          dispatch(authSuccess(res.data.data))
        }else {
          dispatch(errorMsg(res.data.msg))
        }
      })
  }
}
















