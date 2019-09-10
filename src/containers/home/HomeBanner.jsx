/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const HomeBanner = () => (
  <section className="home-banner-area" >
    <div className="container">
      <div className="fullscreen d-flex align-items-center">
        <div className="col-lg-4 justify-content-center " style={{ marginTop: '50px',marginBottom: '200px' }}>
          <h1
            className="wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay=".6s"
          >
            Welcome to twiscode
            Develope anything.
          </h1>
          <div
            className="designation mb-25 wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.5s"
          >
            <hr />
            <p>
              Bulid a beautiful, modern website and mobile with flexible components built from scratch
            </p>
          </div>
          <a href="#" className="primary-btn" data-text="Contact Us">
            <span>Contact Us</span>

          </a>
        </div>
        <div className="banner-img offset-lg-1 col-lg-7 col-md-6">
          <img className="img-fluid" src="/public/img/icon1.png" alt="" style={{ marginRight: '100px', marginTop: '-550px', marginBottom: '294px', width: '450px' }} />
        </div>

      </div>
    </div>
  </section>
);

export default HomeBanner;
