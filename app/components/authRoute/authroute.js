/**
 * Created by Administrator on 2018/1/30.
 */
import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

class AuthRoute extends React.Component{
  componentDidMount(){
    const urlList = ['/login', '/register']
    const pathname = this.props.location.pathname
    if(urlList.indexOf(pathname) > -1){
      return null
    }
    axios.get('/api/user/info')
      .then(res => {
        if(res.data.code === 0){

        }else {
          this.props.history.push('/login')
        }
      })
  }
  render(){
    return null
  }
}

export default withRouter(AuthRoute)