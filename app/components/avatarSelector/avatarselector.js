/**
 * Created by Administrator on 2018/1/31.
 */
import React from 'react'
import { Grid, WhiteSpace } from 'antd-mobile'
import './style.scss'
class AvatarSelector extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }
  render(){
    const avatarList = 'boy,girl,man,woman,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,pig,tiger,whale,zebra'
                        .split(',')
                        .map(v=>({
                          icon: require(`../../static/images/${v}.png`),
                          text: v
                        }))
    return(
      <div>
        <div className="header-icon">
          {this.state.icon ? <div className="header-icon">已选头像：<img src={this.state.icon} alt=""/></div> : '请选择头像'}
        </div>
        <Grid data={avatarList}
              onClick={elm => {
                this.setState(elm)
                this.props.selectAvatar(elm.text)
              }}
              columnNum={5}
        />
        <WhiteSpace/>
      </div>
    )
  }
}

export default AvatarSelector