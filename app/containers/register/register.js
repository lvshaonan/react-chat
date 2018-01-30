/**
 * Created by Administrator on 2018/1/30.
 */
import React from 'react'
import { connect } from 'react-redux'
import { WhiteSpace, InputItem, WingBlank, List, Button, Radio } from 'antd-mobile'
import { Redirect } from 'react-router-dom'
import { register } from '../../redux/user.redux'
import Logo from '../../components/logo/logo'
import './style.scss'
class Register extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      user: '',
      pwd: '',
      repeatpwd: '',
      type: 'genius'
    }
    this.handleRegister = this.handleRegister.bind(this)
  }
  handleChange(key, val){
    this.setState({
      [key]: val
    })
  }
  handleRegister(){
    this.props.register(this.state)
  }
  render(){
    const RadioItem = Radio.RadioItem
    return(
      <div>
        {this.props.state.redirectTo ? <Redirect to={this.props.state.redirectTo} /> : null}
        <Logo></Logo>
        <p className="warning-wrapper">{this.props.state.msg}</p>
        <WingBlank size="md">
          <List>
            <InputItem onChange={v => this.handleChange('user', v)}>
              用户名
            </InputItem>
            <InputItem type="password" onChange={v => this.handleChange('pwd', v)}>
              密码
            </InputItem>
            <InputItem type="password" onChange={v => this.handleChange('repeatpwd', v)}>
              确认密码
            </InputItem>
            <WhiteSpace/>
            <RadioItem checked={this.state.type=='genius'} onChange={() => this.handleChange('type', 'genius')}>
              genius
            </RadioItem>
            <RadioItem checked={this.state.type=='boss'} onChange={() => this.handleChange('type', 'boss')}>
              boss
            </RadioItem>
            <WhiteSpace/>
            <Button type="primary" onClick={this.handleRegister}>注册</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  state: state.user
})

const actionCreators = {register}
Register = connect(mapStateToProps, actionCreators)(Register)

export default Register