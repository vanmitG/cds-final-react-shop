import React, { Component } from 'react'
import { Link, Redirect } from "react-router-dom"

// let returnHome = () => {
//   // console.log('return homeeee')
//   return < Redirect to="/home" />
// };
export default class Error404 extends Component {

  render() {
    return (
      <div className="bg-404">
        <div className="container">
          <section className="agile-error">
            {/*728x90*/}
            <div className="agile-errheader">
              <h1>interactive <span>error</span> page</h1>
            </div>
            <div className="agile-errmain">
              {/*728x90*/}
              <h2>404</h2>
              <p>oops!Sorry we can't find this page.</p>
              <span>either something went wrong or the page doesn't exist
              anymore.</span>
            </div>

            <div className="clearfix" />
          </section>
        </div>
      </div>
    )
  }
}
