/**
 * Created by Administrator on 2018/1/31.
 */
import React from 'react'
import { TabBar } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import './style.scss'
class NavLinkBar extends React.Component{
  render(){
    const navData = this.props.data.filter(v=>!v.hide)
    const pathname = this.props.location.pathname
    return(
      <div className="tab-bar-bottom">
        <TabBar>
          {navData.map(v=>(
            <TabBar.Item
              key={v.path}
              title={v.text}
              icon={{uri: require(`./images/${v.icon}.png`)}}
              selectedIcon={{uri: require(`./images/${v.icon}-active.png`)}}
              selected={pathname===v.path}
              onPress={()=>{
                this.props.history.push(v.path)
              }}
            >
            </TabBar.Item>
          ))}
        </TabBar>
      </div>
    )
  }
}

export default withRouter(NavLinkBar)