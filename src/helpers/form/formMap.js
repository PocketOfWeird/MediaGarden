import React from 'react'
import map from 'lodash.map'
import FormTag from '../../components/FormTag'
import { isLoading } from '../../selectors'


export const formMapStateToProps = state => ({
  values: state.form.values,
  errors: state.form.errors,
  isLoading: isLoading(state)
})

export const formSelectMap = (collection,
  subNameFunction=undefined, id='id', name='name') => {
  return map(collection, (object, key) =>
    <div
      key={key}
      value={object[id]}
      name={object[name]}
      subName={subNameFunction !== undefined ? subNameFunction(object) : ''}
    />
  )
}

export const formTagMap = (collection, parentName,
  handleTagDelete, customColor=null) => {
  return map(collection, (tag, key) =>
    <FormTag
      key={key}
      label={tag}
      onRequestDelete={handleTagDelete(parentName, tag)}
      color={customColor !== null ? customColor(tag) : ''}
    />
  )
}
