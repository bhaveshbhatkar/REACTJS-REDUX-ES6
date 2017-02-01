/**
 * Created by bhavesh_bhatkar on 11/15/16.
 */
import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

class QuoteDetailActionsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      quote: Object.assign({}, props.quote),
      errors: {},
      saving: false
    };
  }
  render() {
    const quote = this.props.quote;
    let quotePath,  preOppPath;
    if(quote){
      if(quote.id){
        quotePath = '/quote/'+quote.id;
        preOppPath = '/quote/'+quote.id+'/preopp';
      }else{
        quotePath = '/quote';
        preOppPath = '/quote/preopp';
      }
    }
     return( <div className="quote-title">
        <div className="home-actions">
          <Link to={quotePath} activeClassName="active-tab">Quote</Link>
          {/*<Link to={quotePath} activeClassName="active-tab">Account Information</Link>*/}
          {/*<Link to={quotePath} activeClassName="active-tab">Current Opportunity</Link>*/}
          <Link to={preOppPath} activeClassName="active-tab">Previous Opportunities</Link>
        </div>
        <div className="quote-detail">Pricing Tool - <Link to="/"> Quotes </Link></div>
      </div>
     );
  }
}

QuoteDetailActionsPage.propTypes = {
  quote: PropTypes.object.isRequired
};

export default QuoteDetailActionsPage;

