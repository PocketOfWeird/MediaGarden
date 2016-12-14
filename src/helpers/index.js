export * from './form'
export * from './data'
export * from './token'

// General helpers
export const isEmptyObject = obj => {
  return Object.keys(obj).length === 0 && obj.constructor === Object
}
