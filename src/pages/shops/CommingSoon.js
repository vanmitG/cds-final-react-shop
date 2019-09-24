import React, { Component } from 'react'
import { Link } from "react-router-dom"
export default class CommingSoon extends Component {
  render() {
    let page;
    try {
      page = this.props.location.state.page;
    } catch (error) {
      page = "comming soon";
      // console.log('hellooooo', error);
    }
    return (
      <div>
        <h1>CommingSoon</h1>
        <Link className="btn" to="/home" style={{ 'backgroundColor': '#f16c26', 'color': 'white' }}>Back Home</Link>
        <h3>from: {page}</h3>
      </div >
    )
  }
}
