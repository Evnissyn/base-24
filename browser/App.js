import React, {Component} from 'react';
import {Link} from 'react-router'

export default class App extends Component{

  render () {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div className="container-fluid">
            <div className="navbar-header">
              <ul className="nav navbar-nav">
                <li><Link to="/"> Introduction </Link></li>
                <li><Link to="/converter"> Convert To Decimal </Link></li>
                <li><Link to="/decimalConverter"> Convert to Base 24 </Link></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container child-container">
          {this.props.children}
        </div>
      </div>
    )
  }
}

