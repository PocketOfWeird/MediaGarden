import React, { PropTypes } from 'react'
import map from 'lodash.map'
import { yellowA400 } from 'material-ui/styles/colors'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import Chip from 'material-ui/Chip'
import AudioPlayer from 'react-audio-player'
import Loader from './Loader'
import UpdateContainer from '../containers/forms/UpdateContainer'


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
          <div style={styles.player}>
            <AudioPlayer
              src={result.url}
              autoPlay
            />
            {result.author && <p style={styles.p}>Author: {result.author}</p>}
          </div>
        </CardText>
        <CardText>
          <RaisedButton
            label='Download'
            onTouchTap={props.handleDownload(result.url)}
          />
          {result.keywords && result.keywords.length > 0 &&
            <div>
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
            </div>
          }
        </CardText>
        {props.logged &&
          <CardActions>
            <RaisedButton
              label='Update'
              onTouchTap={props.handleTapUpdate(result)}
            />
          </CardActions>
        }
      </Card>
    )}
    {props.loading && <Loader />}
  </div>
)

let styles = {
  p: {
    width: '100%'
  },
  player: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: 14
  }
}

Results.propTypes = {
  loading: PropTypes.bool.isRequired,
  resultsList: PropTypes.array.isRequired,
  logged: PropTypes.bool.isRequired,
  handleDownload: PropTypes.func.isRequired,
  handleKeyword: PropTypes.func.isRequired,
  handleTapUpdate: PropTypes.func.isRequired
}

export default Results
