/**
 * Created by Administrator on 2018/1/31.
 */
import React from 'react'
import { NavBar } from 'antd-mobile'
import { connect } from 'react-redux'
import NavLinkBar from '../navLinkBar/navLinkBar'

function Boss() {
  return <h2>boss</h2>
}
function Genius() {
  return <h2>Genius</h2>
}
function Msg() {
  return <h2>Msg</h2>
}
function Me() {
  return <h2>Me</h2>
}
class DashBoard extends React.Component{
  render(){
    const pathname = this.props.location.pathname
    const user = this.props.state
    const navList = [
      {
        path: '/boss',
        title: '牛人列表',
        text: '牛人',
        icon: 'boss',
        component: Boss,
        hide: user.type === 'genius'
      },
      {
        path: '/genius',
        title: 'Boss列表',
        text: 'Boss',
        icon: 'job',
        component: Genius,
        hide: user.type === 'boss'
      },
      {
        path: '/msg',
        title: '消息列表',
        text: '消息',
        icon: 'msg',
        component: Msg,
      },
      {
        path: '/me',
        title: '个人中心',
        text: '我',
        icon: 'user',
        component: Me,
      }
    ]
    const title = navList.find(v=>v.path===pathname).title
    return(
      <div>
        <NavBar mode="dark">{title}</NavBar>
        <NavLinkBar data={navList}></NavLinkBar>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  state: state.user
})

DashBoard = connect(mapStateToProps)(DashBoard)

export default DashBoard