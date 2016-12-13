import React, { PropTypes } from 'react'
import { Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import Loader from './Loader'


const AddUpdate = (FormFieldsContainer, FormSelectContainer,
  FormFileContainer, FormTagsContainer, FormActionContainer) => (props) => (
  <div>
    <Card>
      <CardHeader
        title='Add a Sound'
      />
      <CardText>
        {props.loading && <Loader />}
        <FormFieldsContainer>
          <div name='name' label='Name' />
        </FormFieldsContainer>
        <FormSelectContainer name='type' label='Select a Type'>
          <div value='SFX' name='SFX' />
          <div value='MUSIC' name='MUSIC' />
        </FormSelectContainer>
        <FormFileContainer name='url' label='Drop or choose a WAV File' />
        <FormTagsContainer
          name='keywords'
          label='Keywords'
        />
        <FormFieldsContainer>
          <div name='author' label='Author' />
          <div name='length' label='Length' />
        </FormFieldsContainer>
      </CardText>
      <CardActions>
        <FormActionContainer label='Save' />
        {props.loading && <Loader />}
      </CardActions>
    </Card>
  </div>
)

export default AddUpdate
