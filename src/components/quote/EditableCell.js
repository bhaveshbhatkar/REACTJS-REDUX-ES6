/**
 * Created by bhavesh_bhatkar on 11/16/16.
 */
import React, {PropTypes} from 'react';

class EditableCell extends React.Component{
  render(){
    return (
        <td>
          <input type="text"
                 name={this.props.cellData.type}
                 id={this.props.cellData.id}
                 value={this.props.cellData.value}
                 onChange={this.props.productDescriptionChange}/>
        </td>
    );
  }
}

EditableCell.propTypes = {
  cellData:PropTypes.object.required,
  type:PropTypes.string.required,
  id:PropTypes.number.required,
  value:PropTypes.string.required,
  productDescriptionChange: PropTypes.func.required
};
export default EditableCell;
