import React from 'react'


const BrowserWarningContainer = () => (
  <div style={styles}>
    <h2>
      Sorry, Media Garden is unsupported on <br />
      iOS, Safari, and Internet Explorer <br />
      Please use Google Chrome or Mozilla Firefox
    </h2>
  </div>
)

let styles = {
  maxWidth: 768,
  height:'100%'
}

export default BrowserWarningContainer
