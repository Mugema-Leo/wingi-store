import React, { Component } from 'react'
import Homes from '../components/Home/Home';

export default class Home extends Component {
	constructor(){
		super();
		this.state={
			products: [
				{
					id:0,
					src:"https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/13a.webp",
					name:"Ikabutura",
					price: 234
				},
				{
					id:1,
					src:"https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/13a.webp",
					name:"Ikabutura",
					price: 234
				}
				,{
					id:2,
					src:"https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/13a.webp",
					name:"Ikabutura",
					price: 234
				},
				{
					id:3,
					src:"https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/13a.webp",
					name:"Ikabutura",
					price: 234
				}
			]
		}
	}
	
  render() {
    return (
     <div>
		<div class="container">
			<div class="row">
			{
					this.state.products.map((product)=>{
						return(
							<div key={product.id} class="col col-lg-4 bg-green">
								<Homes name={product.name} src={product.src} price={product.price} className="col col-sm-2 "/>
							</div>
						)
					})
				}
			</div>
		</div>
	 </div>
    )
  }
}
