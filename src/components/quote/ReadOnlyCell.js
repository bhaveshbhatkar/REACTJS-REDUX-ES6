/**
 * Created by bhavesh_bhatkar on 11/17/16.
 */
import React, {PropTypes} from 'react';

class ReadOnlyCell extends React.Component{
  render(){
    return (
      <td>
        {this.props.cellData.value}
      </td>
    );
  }
}

ReadOnlyCell.propTypes = {
  cellData:PropTypes.object.required
};
export default ReadOnlyCell;
