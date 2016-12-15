import React from 'react'
import { Card, CardActions, CardText} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'


const Prompt = (props) => (
  <div>
    {props.question &&
      <div style={styles}>
        <Card>
          <CardText>
            {props.question}
          </CardText>
          <CardActions>
            <RaisedButton
              label='Yes'
              onTouchTap={props.handleYes(props.yesAction)}
            />
            <RaisedButton
              label='No'
              onTouchTap={props.handleNo(props.noAction)}
            />
          </CardActions>
        </Card>
      </div>
    }
  </div>
)

let styles = {
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  backgroundColor: 'rgba(0,0,0,0.25)',
  display:'flex',
  zIndex: 10,
  alignItems: 'center',
  justifyContent: 'center'
}

export default Prompt
