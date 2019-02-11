import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Sidebar from './components/sidebar';
import routes from './routes';
import Login from './Login'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {routes.map((route, index) =>
            <Route
              key={index}
              exact={route.exact}
              path={route.path}
              component={Sidebar}
            />
          )}
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
