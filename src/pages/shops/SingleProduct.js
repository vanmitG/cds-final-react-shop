import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
export default class SingleProduct extends Component {
  render() {
    return (
      <div>
        <Redirect to={{
          pathname: '/comming_soon',
          state: { page: 'Product Single' }
        }}
        />
      </div>
    )
  }
}
