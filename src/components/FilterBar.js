import React, { PropTypes } from 'react'
import { Card, CardActions, CardHeader } from 'material-ui/Card'
import Slider from 'material-ui/Slider'
import FlatButton from 'material-ui/FlatButton'


const FilterBar = (props) => (
  <Card>
    <CardHeader
      subtitle='FILTERS'
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardActions expandable={true}>
      <label>
        {props.searchType ? props.searchType === 2 ? 'ONLY MUSIC':'SFX & MUSIC':'ONLY SFX'}
      </label>
      <Slider
        min={0}
        max={2}
        step={1}
        value={props.searchType}
        onChange={props.handleTypeChange}
      />
      <CardActions>
        <FlatButton
          label='Reset Filters'
          onTouchTap={props.handleReset}
        />
      </CardActions>
    </CardActions>
  </Card>
)

FilterBar.propTypes = {
  searchType: PropTypes.number.isRequired,
  handleTypeChange: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired
}

export default FilterBar
