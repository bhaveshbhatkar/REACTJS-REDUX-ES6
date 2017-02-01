/**
 * Created by bhavesh_bhatkar on 11/12/16.
 */
import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import Griddle  from 'griddle-react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as quoteActions from '../../actions/quoteActions';
import * as Constants from '../common/Constants';

class QuoteGridPage extends React.Component{

  constructor(props, context){
      super(props, context);
  }

  onTitleChange(event){
    const quote = this.state.quote;
    quote.title = event.target.value;
    this.setState({title:quote});
  }

  onSaveChange(event){
    this.props.actions.createQuote(this.state.quote);
  }

  onRowClick(e) {
   // alert(JSON.stringify(e.props.data));
  }

  quoteRow(quote, index){
    return <div key={index}>{quote.title}</div>;
  }

  quotesColumnMetadata(){
    return Constants.QUOTES_GRIDDLE_HEADER;
  }

  quoteRowData(){
    return [];
  }

  render() {
    const {quotes} = this.props;
    return (
      <div>
        <h4> In Progress </h4>
        <div className="create-new-quote"><Link to={'/quote'}>Create New Quote </Link></div>
        <Griddle results={quotes}  tableClassName="table" columnMetadata = {this.quotesColumnMetadata()} onRowClick={this.onRowClick}/>
      </div>
    );
  }

}

QuoteGridPage.propTypes = {
  quotes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    quotes: state.quotes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(quoteActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteGridPage);
