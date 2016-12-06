import React, { PropTypes } from 'react'
import { Card, CardText } from 'material-ui/Card'
import AutoComplete from 'material-ui/AutoComplete'


const SearchBar = ({ dataSource, handleUpdateInput }) => (
  <Card>
    <CardText>
      <AutoComplete
          id='search'
          type='search'
          floatingLabelText='Search'
          fullWidth={true}
          dataSource={dataSource}
          onUpdateInput={handleUpdateInput}
      />
    </CardText>
  </Card>
)

SearchBar.propTypes = {
  dataSource: PropTypes.array.isRequired,
  handleUpdateInput: PropTypes.func.isRequired
}

export default SearchBar
