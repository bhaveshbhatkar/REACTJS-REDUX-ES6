/**
 * Created by bhavesh_bhatkar on 11/11/16.
 */

import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container-fluid">

        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            <img src={require("../../images/index.jpeg")} />
          </a>
        </div>
        <div className="navbar-header">

        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav navbar-right">
            <li className="dropdown"><a href="#">Deepika Chauhan</a></li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

Header.propTypes = {
  //loading: PropTypes.bool.isRequired
};

export default Header;
