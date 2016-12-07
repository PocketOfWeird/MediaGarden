import React, { PropTypes } from 'react'
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar'
import { yellowA400 } from 'material-ui/styles/colors'
import Badge from 'material-ui/Badge'
import IconButton from 'material-ui/IconButton'
import CartIcon from 'material-ui/svg-icons/action/shopping-cart'
import AddCircle from 'material-ui/svg-icons/content/add-circle'


const AppTitleBar = (props) => (
  <Toolbar style={styles}>
    <ToolbarTitle text={props.title} />
    {props.logged &&
      <IconButton
        tooltip='Add Sounds'
        onTouchTap={props.handleAddTap}
      >
        <AddCircle />
      </IconButton>
    }
  </Toolbar>
)

let styles={
  backgroundColor: yellowA400
}

AppTitleBar.propTypes = {
  logged: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  handleAddTap: PropTypes.func.isRequired
}

export default AppTitleBar
