/**
 * Created by bhavesh_bhatkar on 11/13/16.
 */
import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

class LinkComponent extends React.Component {
  constructor(props, context){
    super(props, context);
  }
  render() {
    return (
     <span className="quote-link"> <Link to={'/quote/'+this.props.data}>{this.props.data}</Link></span>
    );
  }
}
LinkComponent.propTypes = {
  data:PropTypes.number.isRequired
};

export default LinkComponent;
