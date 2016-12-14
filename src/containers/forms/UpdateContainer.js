import React from 'react'
import { connect } from 'react-redux'
import { serverUpdate, serverRemove, goBackward } from '../../actions'
import { isLoading } from '../../selectors'
import makeFormFieldsContainer from './FormFieldsContainer'
import makeFormActionContainer from './FormActionContainer'
import makeFormSelectContainer from './FormSelectContainer'
import makeFormTagsContainer from './FormTagsContainer'
import FormFileContainer from './FormFileContainer'
import AddUpdate from '../../components/AddUpdate'


const requiredFields = [
  'name', 'type', 'url'
]

const FormFieldsContainer = makeFormFieldsContainer(requiredFields, serverUpdate)
const FormSelectContainer = makeFormSelectContainer()
const FormTagsContainer = makeFormTagsContainer('keywords')
const FormActionContainer = makeFormActionContainer(requiredFields, serverUpdate)

const UpdateContainer = AddUpdate(
  FormFieldsContainer, FormSelectContainer,
  FormFileContainer, FormTagsContainer, FormActionContainer
)

const mapStateToProps = state => ({
  loading: isLoading(state),
  updating: true
})

const mapDispatchToProps = dispatch => ({
  handleDelete: e => dispatch(serverRemove())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateContainer)
