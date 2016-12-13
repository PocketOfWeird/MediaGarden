import React, { PropTypes } from 'react'
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import MenuItem from 'material-ui/MenuItem'


const Logged = (props) => (
  <IconMenu
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    {props.currentView[0] === 'add' ?
      <MenuItem
        primaryText='Go Back'
        onTouchTap={props.handleBack}
      />
      : <MenuItem
          primaryText="Add Sounds"
          onTouchTap={props.handleAddTap}
        />
    }
    <MenuItem
      primaryText="Sign out"
    />
  </IconMenu>
)

Logged.propTypes = {
  currentView: PropTypes.array.isRequired,
  handleAddTap: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired
}

export default Logged
