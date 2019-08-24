import React from 'react'

export default function Footer() {
  return (
    <footer className="py-4 bg-dark">
      <div className="container copy-right">
        <div className="row">
          <div className="col-md-6 text-white"> Copyright © 2019 <a href="#">Organic Store </a>- All Rights Reserved. </div>
          <div className="col-md-6 payment">
            <div className="pull-right"> <a href="#"><img src="template/assets/images/skrill.png" alt="" title /></a> <a href="#"><img src="template/assets/images/ob.png" alt="" title /></a> <a href="#"><img src="template/assets/images/paypal.png" alt="" title /></a> <a href="#"><img src="template/assets/images/am.png" alt="" title /></a> <a href="#"><img src="template/assets/images/mr.png" alt="" title /></a> <a href="#"><img src="template/assets/images/visa.png" alt="" title /></a> </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
