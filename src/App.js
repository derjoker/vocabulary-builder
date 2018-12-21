import React, { Component } from 'react'
import { Stitch, UserPasswordCredential } from 'mongodb-stitch-browser-sdk'

import Kindle from './containers/Kindle'

try {
  const client = Stitch.initializeDefaultAppClient(
    process.env.REACT_APP_STITCH_APP_KEY
  )
  const credential = new UserPasswordCredential(
    process.env.REACT_APP_TEST_EMAIL,
    process.env.REACT_APP_TEST_PASSWORD
  )
  client.auth.loginWithCredential(credential)
} catch (error) {
  // ignore: default app can only be set once
  console.log(error)
}

class App extends Component {
  render () {
    return (
      <div>
        <Kindle />
      </div>
    )
  }
}

export default App
