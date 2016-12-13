import React, { PropTypes } from 'react'
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import MenuItem from 'material-ui/MenuItem'


const Login = (props) => (
  <IconMenu
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem
      primaryText="MJF Instructor Login"
      onTouchTap={props.handleLogin}
    />
  </IconMenu>
)

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired
}

export default Login
