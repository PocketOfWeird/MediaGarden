import React, { PropTypes } from 'react'
import { Card, CardHeader, CardText } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import map from 'lodash.map'


const Browse = ({ categories, handleClick }) => (
  <div>
    <Card>
      <CardHeader title='Browse' />
      <CardText>
        {map(categories, (cat, key) =>
          <RaisedButton
            key={key}
            label={cat.name}
            onTouchTap={handleClick(cat.id)}
            style={styles.button}
          />
        )}
      </CardText>
    </Card>
  </div>
)

let styles = {
  button: {
    margin: 12
  }
}

Browse.propTypes = {
  categories: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default Browse
