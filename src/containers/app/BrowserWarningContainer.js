import React from 'react'


const BrowserWarningContainer = () => (
  <div style={styles}>
    <h2>
      You are using an unsupported browser. <br />
      Please use Google Chrome or Mozilla Firefox
    </h2>
  </div>
)

let styles = {
  maxWidth: 768,
  height:'100%'
}

export default BrowserWarningContainer
