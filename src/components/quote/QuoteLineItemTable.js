/**
 * Created by bhavesh_bhatkar on 11/17/16.
 */
import React, {ProtoTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import QuoteLineItemRow from './QuoteLineItemRow';
import {connect} from 'react-redux';

class QuoteLineItemTable extends React.Component {


  render() {

    return (
      <div>
        <table className="table">
          <thead>
          <tr>
            <th>SKU Number</th>
            <th>Product Description</th>
            <th>Product Type</th>
            <th>Unit MSRP ($)</th>
            <th>Quantity( # of Cert Units)</th>
          </tr>
          </thead>
          <tbody>
          {/*{this.props.quoteLineItems.map({*/}

          {/*})}*/}
          </tbody>
        </table>
      </div>
    );
  }
}
QuoteLineItemTable.propTypes = {

};


export default QuoteLineItemTable;
