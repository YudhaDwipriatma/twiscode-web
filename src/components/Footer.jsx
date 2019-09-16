import React from 'react';

const HomeFooter = () => {
  return (
    <div className="footer-buttom-1">
      <div className="footer-buttom" />
      <div className="col-lg-2 col-md-6 col-sm-6 social-widget">
        <div className="single-footer-widget">
          <div className="no-socia ld-flex align-items-center" />
        </div>
        <div className="row">
          <div className="col-lg-12">
            <p className="footer-text">@2019 Twistcode All rights reserved</p>
          </div>
          <div className="footer-sosmed">
            <img className="fb-footer" src="public/img/home/fb.png" alt="" />
            <img
              className="tw-footer"
              src="public/img/home/twitter.png"
              alt=""
            />
            <img
              className="pn-footer"
              src="public/img/home/pi nterest.png"
              alt=""
            />
            <img
              className="db-footer"
              src="public/img/home/dribble.png"
              alt=""
            />
            <img
              className="lk-footer"
              src="public/img/home/linkedin.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
