import React, { PropTypes } from 'react'
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar'
import { amber700 } from 'material-ui/styles/colors'
import Badge from 'material-ui/Badge'
import IconButton from 'material-ui/IconButton'
import CartIcon from 'material-ui/svg-icons/action/shopping-cart'
import AddCircle from 'material-ui/svg-icons/content/add-circle'


const AppTitleBar = (props) => (
  <Toolbar style={styles}>
    <ToolbarTitle text={props.title} />
    <Badge
      badgeContent={props.cartCount}
      secondary={true}
    >
      <IconButton
        tooltip='Download Cart'
        onTouchTap={props.handleCartTap}
      >
        <CartIcon />
      </IconButton>
    </Badge>
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
  backgroundColor: amber700
}

AppTitleBar.propTypes = {
  logged: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  cartCount: PropTypes.number.isRequired,
  handleCartTap: PropTypes.func.isRequired,
  handleAddTap: PropTypes.func.isRequired
}

export default AppTitleBar
