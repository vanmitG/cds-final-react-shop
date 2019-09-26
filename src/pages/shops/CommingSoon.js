import React, { Component } from 'react'

export default class CommingSoon extends Component {
  render() {
    let page;
    // Try get the page which is not ready
    try {
      page = this.props.location.state.page;
    } catch (error) {
      page = "page";
    }
    return (
      <div>
        <div className="bg-404">
          <div className="container">
            <section className="agile-error">
              {/*728x90*/}
              <div className="agile-errheader">
                <h1> {page} <span>is under</span> construction</h1>
              </div>
              <div className="agile-errmain">
                {/*728x90*/}
                <h2>Coming Soon</h2>
                <p>oops! Sorry, the page you're looing for is not ready.</p>
                <span>we are launching it soon</span>
              </div>

              {/* <div className="copy-right2">
                <p>Copyright © 2019 Organic Store - All Rights Reserved.</p>
              </div> */}
              <div className="clearfix" />
            </section>
          </div>
        </div>
      </div >
    )
  }
}
