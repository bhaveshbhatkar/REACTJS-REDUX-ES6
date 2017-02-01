/**
 * Created by bhavesh_bhatkar on 11/14/16.
 */
import React from 'react';
import {Link, IndexLink} from 'react-router';


class AccountInfo extends React.Component {
  render() {
    return (
      <div className="container-content">
        <div className="quote-title">
          <div className="home-actions">
            <Link to="/quote" activeClassName="active-tab">Quote</Link>
            <Link to="/quote/account" activeClassName="active-tab">Account Information</Link>
            <Link to="/quote/currentopp" activeClassName="active-tab">Current Opportunity</Link>
            <Link to="/quote/preopp" activeClassName="active-tab">Previous Opportunities</Link>
          </div>
          <div className="quote-detail">Pricing Tool - <Link to="/"> Quotes </Link></div>
        </div>
        <div className="under-construction">
          Quote <span> Account Infomation </span> Page will come here ...
        </div>
      </div>
    );
  }
}

export default AccountInfo;
