import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import SearchViewContainer from '../search'
import AddContainer from '../forms/AddContainer'
import UpdateContainer from '../forms/UpdateContainer'


const ViewsContainer = ({ view }) => (
  <div style={styles}>
    {view[0] === 'search' &&
      <SearchViewContainer />
    }
    {view[0] === 'add' &&
      <AddContainer />
    }
    {view[0] === 'update' &&
      <UpdateContainer />
    }
  </div>
)

let styles = {
  margin: '0.15rem'
}

ViewsContainer.propTypes = {
  view: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
  view: state.view.current
})

export default connect(mapStateToProps)(ViewsContainer)
