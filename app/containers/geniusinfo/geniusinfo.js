/**
 * Created by Administrator on 2018/1/31.
 */
import React from 'react'
import { NavBar, InputItem, WingBlank, TextareaItem, Button, WhiteSpace } from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { update } from '../../redux/user.redux'
import AvatarSelector from '../../components/avatarSelector/avatarselector'
class GeniusInfo extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: '',
      company: '',
      money: '',
      desc: '',
      avatar: ''
    }
  }
  onChange(key, val){
    this.setState({
      [key]: val
    })
  }
  render(){
    const redirect = this.props.state.redirectTo
    const path = this.props.location.pathname
    return(
      <div>
        {redirect&&redirect!==path ? <Redirect to={this.props.state.redirectTo}></Redirect> : null}
        <NavBar mode="dark" >BOSS完善信息</NavBar>
        <AvatarSelector
          selectAvatar={imgName => {
            this.setState({
              avatar: imgName
            })
          }}
        ></AvatarSelector>
        <WingBlank size="md">
          <InputItem onChange={v => this.onChange('title', v)}>
            求职职位
          </InputItem>
          <TextareaItem
            title="个人简介"
            onChange={v => this.onChange('desc', v)}
            autoHeight
            rows={3}
          />
          <WhiteSpace/>
          <Button type="primary" onClick={()=> {
            this.props.update(this.state)
          }}>提交</Button>
        </WingBlank>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  state: state.user
})

const actionCreators = {update}
GeniusInfo = connect(mapStateToProps, actionCreators)(GeniusInfo)
export default GeniusInfo
