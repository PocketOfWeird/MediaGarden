import React from 'react'
import { yellowA400 } from 'material-ui/styles/colors'
import Avatar from 'material-ui/Avatar'

const Loader = ({}) => (
  <div style={styles}>
    <Avatar
      src="audio.svg"
      size={50}
      backgroundColor={yellowA400}
    />
  </div>
)

let styles = {
  'width': '100%',
  'display': 'flex',
  'marginTop': 50,
  'alignItems': 'center',
  'justifyContent': 'center',
}

export default Loader
