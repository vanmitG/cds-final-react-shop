import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
export default class BlogSingle extends Component {
  render() {
    return (
      <div>
        <Redirect to={{
        pathname: '/comming_soon',
        state: { page: 'Single Blog' }
      }}
      />
      </div>
    )
  }
}
