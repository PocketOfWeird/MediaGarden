import React, { PropTypes } from 'react'
import FlatButton from 'material-ui/FlatButton'
import Dropzone from 'react-dropzone'


const FormFile = (props) => (
  <div>
    <Dropzone
      multiple={false}
      onDrop={props.handleChange(props.name)}
    >
      <div>{props.label}</div>
    </Dropzone>
    {props.values[props.name] &&
      <p>File: {
        props.values[props.name].name
      }</p>
    }
  </div>
)

FormFile.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  values: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default FormFile
