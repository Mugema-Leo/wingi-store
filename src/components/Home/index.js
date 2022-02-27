import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import shoes from './../../assets/bg_2.png'

export default class Home extends Component {
  render() {
    const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      backgroundImage: `url(${shoes})`,
      backgroundSize:"cover",
      padding: "10px",
      height: "100vh",
      fontFamily: "Arial"
    };
    return (
      <div style={mystyle} className="bg-muted bg-image bg-image p-5 text-center shadow-1-strong rounded text-black d-flex justify-content-center align-items-center">
        <div>
            <h1 class="mb-3 h2">Jumbotron</h1>
            <div class="col-xs-1" align="center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus praesentium
                labore accusamus sequi, voluptate debitis tenetur in deleniti possimus modi voluptatum
                neque maiores dolorem unde? Aut dolorum quod excepturi fugit.
            </div>
           <div>
            <Link to="/create"><button className='btn bg-success pt-3 text-white m-2'>Create your Store</button></Link>
            <Link to="/products"><button className='btn bg-success pt-3 text-white m-2'>View Products</button></Link>
           </div>
        </div>
      </div>
    )
  }
}
