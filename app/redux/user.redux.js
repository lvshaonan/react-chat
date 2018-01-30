/**
 * Created by Administrator on 2018/1/30.
 */
import axios from 'axios'
import { getRedirectTo } from '../util'
const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const ERROR_MSG= 'ERROR_MSG'

const initState = {
  redirectTo: '',
  isAuth: false,
  user: '',
  pwd: '',
  msg: '',
  type: ''
}

export function user(state=initState, action) {
  switch (action.type){
    case REGISTER_SUCCESS:
      return Object.assign({}, state, {isAuth: true, msg: '', redirectTo: getRedirectTo(action.payload)}, action.payload)
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {isAuth: true, msg: '', redirectTo: getRedirectTo(action.payload)}, action.payload)
    case ERROR_MSG:
      return Object.assign({}, state, {isAuth: false, msg: action.msg})
    default:
      return state
  }
}

function registerSuccess(data) {
  return {type: REGISTER_SUCCESS, payload: data}
}

function loginSuccess(data) {
  return {type: LOGIN_SUCCESS, payload: data}
}

function errorMsg(msg) {
  return {msg, type: ERROR_MSG}
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
          dispatch(registerSuccess(res.data.data))
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
          dispatch(loginSuccess(res.data.data))
        }else {
          dispatch(errorMsg(res.data.msg))
        }
      })
  }
}
















