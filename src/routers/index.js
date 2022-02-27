import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Index from '../pages/Home';
// import Store from '../pages/store';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Index}  />
          {/* <Route exact path="/index" component={Store} /> */}
        </Switch>
    </Router>
    )
  }
}
