import React, { Component } from 'react'
import Product from '../components/Product/Index';

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
     <div className='bg-light'>
		<div class="container ">
			<div class="row justify-content-center mb-3 pb-3">
				<div class="col-md-12 heading-section text-center ftco-animate">
					<h2 class="mb-4">View products available in Wingi store </h2>
					<p> You can create your own store on wing </p>
				</div>
			</div>   		
			<div class="row ">
			{
					this.state.products.map((product)=>{
						return(
							<div key={product.id} class="col col-lg-4">
								<Product name={product.name} src={product.src} price={product.price} className="col col-sm-2 "/>
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
