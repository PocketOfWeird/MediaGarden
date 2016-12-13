export const FORM_TAG_CHANGE = 'FORM_TAG_CHANGE'
export const FORM_TAG_REMOVE = 'FORM_TAG_REMOVE'

export const formTagAdd = (e) => ({
  type: FORM_TAG_CHANGE,
  payload: {
    name: e.target.name,
    value: e.target.value.trim()
  }
})

export const formTagRemove = (name, value) => ({
  type: FORM_TAG_REMOVE,
  payload: {
    name,
    value
  }
})
