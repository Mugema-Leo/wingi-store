import React, { Component } from 'react'
export default class Product extends Component {
  render() {
    return (
      <div>
        <img src={this.props.src} alt="Avatar" className='w-100' />
        <div className="con">
          <h4><b>{this.props.name}</b></h4>
          <div className='d-flex justify-content-between'>
          <p >${this.props.price}</p>
          <button className='bg-success'>Add to chart</button>
          </div>
        </div>
      </div>
    )
  }
}
