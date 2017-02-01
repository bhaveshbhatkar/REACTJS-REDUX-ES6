/**
 * Created by bhavesh_bhatkar on 11/15/16.
 */
import React from 'react';
import {Link, IndexLink} from 'react-router';

class QuoteProductInfoHeaderPage extends React.Component {
  render() {
    return (
      <div className="quote-rep-header">
        <form>
          <div className="row">
            <div className="col-md-2">
              <label>Sales Rep Name</label>
            </div>
            <div className="col-md-4">
              <input type="text"
                     name="rep-name"
                     placeholder="Rep Name" className="form-control" readOnly/>
            </div>
            <div className="col-md-2">
              <label>Current Opportunity ID</label>
            </div>
            <div className="col-md-3">
              <input type="text"
                     name="curr-opp-id"
                     placeholder="Current Opp. Id" className="form-control"/>
            </div>
          </div>

          <div className="row">
            <div className="col-md-2">
              <label>Customer Name</label>
            </div>
            <div div className="col-md-4">
              <input type="text"
                     name="customer-name"
                     placeholder="Customer Name" className="form-control"/>
            </div>
          </div>
        </form>
        <div className="quote-prd-info-title">
          <div>Current Opportunity Product Information. Please enter valid SKU#, Number of Unit(s) </div>
        </div>
      </div>
    );
  }
}

export default  QuoteProductInfoHeaderPage;
