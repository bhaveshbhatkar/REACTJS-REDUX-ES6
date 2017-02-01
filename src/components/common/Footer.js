/**
 * Created by bhavesh_bhatkar on 11/11/16.
 */

import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';


const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="footerText"> Price Quote Portal -  Copyright &copy; 2016 - Symantec Corporation. All rights reserved. </div>
        </div>
      </footer>
    </div>
  );
};

Footer.propTypes = {
  //loading: PropTypes.bool.isRequired
};

export default Footer;
