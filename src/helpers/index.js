export * from './form'
export * from './data'
export * from './token'

// General helpers
export const isEmptyObject = obj => {
  return Object.keys(obj).length === 0 && obj.constructor === Object
}


// Browser detector
export const getBrowser = () => {

  const navigator = window.navigator
  const sUsrAg = navigator.userAgent
  var sBrowser

  if(sUsrAg.indexOf('Chrome') > -1) {
      sBrowser = 'Google Chrome'
  } else if (sUsrAg.indexOf('Safari') > -1) {
      sBrowser = 'Apple Safari'
  } else if (sUsrAg.indexOf('Opera') > -1) {
      sBrowser = 'Opera'
  } else if (sUsrAg.indexOf('Firefox') > -1) {
      sBrowser = 'Mozilla Firefox'
  } else if (sUsrAg.indexOf('MSIE') > -1) {
      sBrowser = 'Microsoft Internet Explorer'
  } else if (sUsrAg.indexOf('Trident/7.0') > -1) {
      sBrowser = 'Microsoft Internet Explorer'
  }
  return sBrowser
}
