import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
export default class ForgotPassword extends Component {
  render() {
    return (
      <Redirect to={{
        pathname: '/comming_soon',
        state: { page: 'Forgot Password' }
      }}
      />
    )
  }
}
