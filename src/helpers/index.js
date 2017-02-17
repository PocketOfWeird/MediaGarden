import FileSaver from 'file-saver'
import bowser from 'bowser'


export * from './form'
export * from './data'
export * from './token'

// General helpers
export const isEmptyObject = obj => {
  return Object.keys(obj).length === 0 && obj.constructor === Object
}


// Browser detector
export const getBrowser = () => {
  return bowser.name
}

export function download(url, name) {
  var xhr = new XMLHttpRequest()
  xhr.open('GET', url)
  xhr.responseType = 'blob'//force the HTTP response, response-type header to be blob
  xhr.onload = function()
  {
    const blob = xhr.response //xhr.response is now a blob object
    FileSaver.saveAs(blob, name)
  }
  xhr.send()
}
