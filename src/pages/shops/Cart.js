import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
export default class Cart extends Component {
  render() {
    return (
      <div>
        <Redirect to={{
          pathname: '/comming_soon',
          state: { page: 'Shopping Cart' }
        }}
        />
      </div>
    )
  }
}
