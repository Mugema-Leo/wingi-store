import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Product from '../pages/Product';
import Home from '../pages/Home';
import CreateStore from '../pages/CreateStore';
import CreateProduct from '../pages/CreateProduct';
// import Store from '../pages/store';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}  />
          <Route exact path="/create" component={CreateStore}  />
          <Route exact path="/product" component={CreateProduct}  />
          <Route exact path="/products" component={Product}  />
          {/* <Route exact path="/index" component={Store} /> */}
        </Switch>
    </Router>
    )
  }
}
