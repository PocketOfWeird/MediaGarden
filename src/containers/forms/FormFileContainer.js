import React from 'react'
import { connect } from 'react-redux'
import { formValueChange, formValueValidate } from '../../actions'
import { formMapStateToProps, setE } from '../../helpers'
import FormFile from '../../components/FormFile'


const FormFieldsContainer = (props) => (
  <FormFile {...props} />
)

const mapDispatchToProps = dispatch => ({
  handleChange: name => files => dispatch(formValueChange(setE(files[0], name))),
  handleBlur: e => dispatch(formValueValidate(e))
})

export default connect(
  formMapStateToProps,
  mapDispatchToProps
)(FormFieldsContainer)
