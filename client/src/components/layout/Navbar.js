import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Materialize, { Component } from 'react-materialize';

// import { BrowserRouter, Switch, Route } from 'react-router-dom';
class Navbar extends Component {
  render() {
    return (
    // <BrowserRouter>
    //  <Switch>
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center black-text"
            >
              <i className="material-icons">code</i>
              What is going on tbh 
            </Link>
          </div>
        </nav>
      </div>
    //  </Switch>
    // </BrowserRouter> 
    );
  }
}
export default Navbar;