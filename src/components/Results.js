import React, { PropTypes } from 'react'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import Chip from 'material-ui/Chip'
import { yellowA400 } from 'material-ui/styles/colors'
import map from 'lodash.map'

const Results = (props) => (
  <div>
    {map(props.resultsList, (result, key) =>
      <Card
        key={key}
      >
        <CardHeader
          title={result.name}
          subtitle={result.type}
          avatar='play.jpg'
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
          <div>Media Player</div>
        </CardText>
        <CardText>
          <RaisedButton
            label='Download'
            onTouchTap={props.handleDownload(result.url)}
          />
          <h5>Keywords</h5>
          {map(result.keywords, (keyword, index) =>
            <Chip
              key={index}
              backgroundColor={yellowA400}
              style={{margin: 1}}
              onTouchTap={props.handleKeyword(keyword)}
            >
              {keyword}
            </Chip>
          )}
        </CardText>
      </Card>
    )}
  </div>
)


Results.propTypes = {
  loading: PropTypes.bool.isRequired,
  resultsList: PropTypes.array.isRequired,
  handleDownload: PropTypes.func.isRequired,
  handleKeyword: PropTypes.func.isRequired
}

export default Results
