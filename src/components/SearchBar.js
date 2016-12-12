import React, { PropTypes } from 'react'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'


const SearchBar = (props) => (
  <Card>
    <CardText>
      <TextField
        floatingLabelText='Search'
        fullWidth={true}
        value={props.searchTerm}
        onChange={props.handleChange}
      />
    </CardText>
    {props.searchTerm &&
      <CardActions>
        <FlatButton
          label='Clear Search'
          onTouchTap={props.handleClear}
        />
      </CardActions>
    }
  </Card>
)

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClear: PropTypes.func.isRequired
}

export default SearchBar
