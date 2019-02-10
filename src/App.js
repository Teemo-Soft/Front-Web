import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './Login'
import Home from './Home'
import Sidebar from './components/sidebar'



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Sidebar} />
        </div>
      </Router>
    );
  }
}

export default App;
