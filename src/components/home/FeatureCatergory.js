import React, { Component } from 'react'

export default class FeatureCatergory extends Component {
  render() {
    return (
      <>
        {/*Three-images*/}
        <div className="three-img">
          <div className="container">
            <h2 className="wow fadeInDown">Featured Category</h2>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 text-center wow fadeIn mb-3">
                <ul className="ch-grid">
                  <li>
                    <div className="ch-item" style={{ background: 'url(/template/assets/images/product/left-img.jpg) no-repeat center top', backgroundSize: '100% 100%' }}>
                      <div className="ch-info">
                        <div className="img-text">
                          <h3>Fresh Oregano</h3>
                          <p>Oregano</p>
                          <p>Apricots</p>
                          <p>Bananas</p>
                          <p>Cantaloupe</p>
                          <a href="#">view more</a> </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4  col-md-6 text-center wow fadeIn mb-3">
                <ul className="ch-grid">
                  <li>
                    <div className="ch-item" style={{ background: 'url(/template/assets/images/product/center-img.jpg) no-repeat center top', backgroundSize: '100% 100%' }}>
                      <div className="ch-info">
                        <div className="img-text">
                          <h3>Fresh Apple</h3>
                          <p>Apple</p>
                          <p>Wheatgrass</p>
                          <p>Arrowroot</p>
                          <p>Grapefruit</p>
                          <a href="#">view more</a> </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 text-center wow fadeIn mb-3">
                <div className="position-relative">
                  <ul className="ch-grid">
                    <li>
                      <div className="ch-item" style={{ background: 'url(/template/assets/images/product/right-img.jpg) no-repeat center top', backgroundSize: '100% 100%' }}>
                        <div className="ch-info">
                          <div className="img-text">
                            <h3>Mango Shake</h3>
                            <p>Pear</p>
                            <p>Apricots</p>
                            <p>Bananas</p>
                            <p>Cantaloupe</p>
                            <a href="#">view more</a> </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/Three-images*/}
      </>
    )
  }
}
