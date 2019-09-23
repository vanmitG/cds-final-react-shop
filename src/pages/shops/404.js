import React, { Component } from 'react'

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
              <p>oops!sorry we can't find this page.</p>
              <span>either something went wrong or the page doesn't exist
              anymore.</span>
            </div>
            <div className="agile-home">
              {/*728x90*/}
              <form method="post">
                <div className="agile-back">
                  <button className="submit" type="button" onclick="location.href='/'">
                    back home
                </button>
                </div>
              </form>
            </div>
            <div className="copy-right2">
              <p>Copyright © 2019 Organic Store - All Rights Reserved.</p>
            </div>
            <div className="clear" />
          </section>
        </div>
      </div>
    )
  }
}
