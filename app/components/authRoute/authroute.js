/**
 * Created by Administrator on 2018/1/30.
 */
import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadData } from '../../redux/user.redux'

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
          this.props.loadData(res.data.data)
        }else {
          this.props.history.push('/login')
        }
      })
  }
  render(){
    return null
  }
}

const mapStateToProps = state => ({})

const actionCreators = {loadData}

AuthRoute = connect(mapStateToProps, actionCreators)(AuthRoute)

export default withRouter(AuthRoute)