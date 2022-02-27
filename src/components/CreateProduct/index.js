import React, { Component } from 'react'

export default class CreateProduct extends Component {
  constructor(){
      super();
      this.state={
          categories:[
              "phones",
              "Computers",
              "radios",
              "foods"
          ],
      }
  }
  render() {
    return (
        <div className=' p-5'>
        <h3 className='text-center'>Create Your Product</h3>
        <div className='d-flex justify-content-center align-item-center '>
        <form >
          <div className="form-group">
              <label>Product Name</label>
              <input type="text" className="form-control" id="exampleInputYour Store name1" placeholder="Enter Your product name" />
          </div>
          <div className="form-group">
              <label >Product price</label>
              <input type="number" className="form-control" id="exampleInputYour Store name1" placeholder="Enter Your product price" />
          </div>
          <div className="form-group">
              <label >Upload product image</label>
              <input type="file" className="form-control" id="exampleInputYour Store name1" placeholder="Upload Your product picture" />
          </div>
          <div className="form-group">
            <label>Select category</label>
            <select className="form-control" id="exampleFormControlSelect1">
                <option value="Electronics">Electronics</option>
                <option value="Foods">Foods</option>
                <option selected value="Clouths">Clouths</option>
                <option value="Utilities">Utilities</option>
                {/* {
                    this.state.categories.forEach((category,index)=>{
                        console.log("categories:",category,"index ",index)
                        return(
                            <option key={index} value={category}>{category}</option>
                        )
                    })
                } */}
            </select>
        </div>
          <button type="submit" className="btn btn-primary mt-2"  onClick={this.goHome}>Save product</button>
          </form>
        </div>
    </div>
    )
  }
}
