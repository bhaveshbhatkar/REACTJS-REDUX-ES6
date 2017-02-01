/**
 * Created by bhavesh_bhatkar on 11/14/16.
 */
import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as quoteActions from '../../actions/quoteActions';
import QuoteDetailActionsPage from './QuoteDetailActionsPage';
import * as _ from 'lodash';

class PreviousOpportunity extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      quote: Object.assign({}, props.quote),
      errors: {},
      saving: false
    };

    this.updateQuote = this.updateQuote.bind(this);
    this.saveQuote = this.saveQuote.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.quote.id != nextProps.quote.id) {
      this.setState({quote: Object.assign({}, nextProps.quote)});
    }
  }


  updateQuote( event ){
  }

  saveQuote( event ){
  }

  render() {
    return (
      <div className="container-content">
        <QuoteDetailActionsPage  quote={this.state.quote}/>
        <div className="under-construction">
          Quote <span> Previous Opportunity </span> Page will come here ...
          {JSON.stringify(this.state.quote)}
        </div>
      </div>
    );
  }

}

PreviousOpportunity.propTypes = {
  quote: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};
//Pull in the React Router context so router is available on this.context.router.
PreviousOpportunity.contextTypes = {
  router: PropTypes.object
};

function getQuoteById(quotes, id) {
  const quote = quotes.filter(quote => quote.id == id);
  if (quote) return quote[0]; //since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
  console.log(' PRE state ', state);
  console.log('Pre ownProps ', ownProps);
  const quoteId = ownProps.params.id; // from the path `/quote/:id`

  let quote = {id: '', accountName: '', modifiedDate: '', description: '', createdDate: '', status:'', quoteLineItems:[]};

  if (quoteId && state.quotes.length > 0) {
    quote = getQuoteById(state.quotes, quoteId);
  }
  return {
    quote: quote
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(quoteActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PreviousOpportunity);

