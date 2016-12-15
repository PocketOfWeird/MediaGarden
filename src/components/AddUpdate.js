import React, { PropTypes } from 'react'
import { Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import Divider from 'material-ui/Divider'
import RaisedButton from 'material-ui/RaisedButton'
import { redA700 } from 'material-ui/styles/colors'
import Loader from './Loader'


const AddUpdate = (FormFieldsContainer, FormSelectContainer,
  FormFileContainer, FormTagsContainer, FormActionContainer) => (props) => (
  <div>
    <Card>
      <CardHeader
        title={props.updating ? 'Update a Sound' : 'Add a Sound'}
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
        <FormTagsContainer
          name='keywords'
          label='Keywords'
        />
        <FormFieldsContainer>
          <div name='author' label='Author' />
          <div name='length' label='Length' />
        </FormFieldsContainer>
        {!props.loading &&
          <FormFileContainer name='url' label='Drop or choose a WAV File' />
        }
      </CardText>
      <CardActions>
        <FormActionContainer label='Save' />
        {props.updating &&
          <div style={{marginTop: 20, marginBottom: 10}}>
            <Divider />
            <RaisedButton
              label='Delete'
              disabled={props.loading}
              onTouchTap={props.handleDelete}
              style={{marginTop: 20}}
              labelColor={'#fff'}
              backgroundColor={redA700}
            />
          </div>
        }
        {props.loading && <Loader />}
      </CardActions>
    </Card>
  </div>
)

export default AddUpdate
