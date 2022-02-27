import React, { Component } from 'react'
import './style.css'
export default class Home extends Component {
  render() {
    return (
      <div>
        <img src={this.props.src} alt="Avatar" className='w-100' />
        <div className="con">
          <h4><b>{this.props.name}</b></h4>
          <p>{this.props.price}</p>
        </div>
      </div>
    )
  }
}
