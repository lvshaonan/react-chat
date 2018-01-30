/**
 * Created by Administrator on 2018/1/30.
 */
import React from 'react'
import { Button, WingBlank, InputItem, WhiteSpace, List } from 'antd-mobile'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../../redux/user.redux'
import Logo from '../../components/logo/logo'

class Login extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      user: '',
      pwd: ''
    }
    this.handleLogin = this.handleLogin.bind(this)
  }
  handleChange(key, val){
    this.setState({
      [key]: val
    })
  }
  handleLogin(){
    this.props.login(this.state)
    setTimeout(()=>{
      console.log(this.props.state)
    },1000)
  }
  render(){
    return(
      <div>
        {this.props.state.redirectTo ? <Redirect to={this.props.state.redirectTo}/> : null}
        <Logo></Logo>
        <p className="warning-wrapper">{this.props.state.msg}</p>
        <WingBlank size="md">
          <List>
            <InputItem onChange={v => this.handleChange('user', v)}>
              用户名
            </InputItem>
            <InputItem onChange={v => this.handleChange('pwd', v)} type="password">
              密码
            </InputItem>
            <WhiteSpace/><WhiteSpace/>
            <Button type="primary" onClick={this.handleLogin}>登录</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  state: state.user
})
const actionCreators = {login}
Login = connect(mapStateToProps, actionCreators)(Login)
export default Login