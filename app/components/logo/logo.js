/**
 * Created by Administrator on 2018/1/30.
 */
import React from 'react'
import logoSrc from './job.png'
import './style.scss'
export default class Logo extends React.Component{
  render(){
    return(
      <div className="logo">
        <img src={logoSrc} alt=""/>
      </div>
    )
  }
}