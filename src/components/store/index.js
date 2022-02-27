import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Store extends Component {
  constructor(){
      super();
      this.state={
        todos: [], 
        text: '',
      }
  }

setText = e => {
    this.setState({ text: e.target.value });
};
addTodo = () => {
    let { todos, text } = this.state;
    todos = todos.concat({ text });
    this.setState({ todos, text: '' });
};
  render() {
    return (
      <div className=' p-5'>
          <h3 className='text-center'>Create Your store</h3>
          <div className='d-flex justify-content-center align-item-center '>
          <form >
            <div class="form-group">
                <label for="exampleInputYour Store name1">Store Name</label>
                <input type="text" class="form-control" id="exampleInputYour Store name1" aria-describedby="Your Store nameHelp" placeholder="Enter Your Store name" />
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Categories</label>
                <div className='d-flex'>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Add category" value={this.state.text} onInput={this.setText} />
                    <button type="button" onClick={this.addTodo}>Add</button>
                </div>
                <ul>
                    { this.state.todos.map( todo => (
                        <li key={todo.id}>{todo.text}</li>
                    )) }
                </ul>
            </div>
        
            <Link to="/product"><button type="submit" class="btn btn-primary">Submit</button></Link>
            </form>
          </div>
      </div>
    )
  }
}
