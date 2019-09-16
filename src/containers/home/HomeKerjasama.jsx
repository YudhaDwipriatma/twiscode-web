import React, { Component } from 'react';
import Slider from 'react-slick';

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <section className="section-kerjasama">
        <div className="container-fluid">
          <div className="slider">
            <h2 className="custom text-center">
              {' '}
              Our Customers are our biggest fans.{' '}
            </h2>
            <p className="text-muted text-center text-kerja">
              Here are few nice things folks have said about our project over
              the years.
            </p>
            <Slider {...settings}>
              <div
                className="img-slider"
                style={{ height: '100px', width: '100px' }}
              >
                <img
                  src="../../public/img/a2.png"
                  alt=""
                  className="img-fluid mw-100 mh-100"
                />
              </div>
              <div className="img-slider" style={{ height: '100px' }}>
                <img
                  src="../../public/img/a3.png"
                  alt=""
                  className="img-fluid mw-100 mh-100"
                />
              </div>
              <div className="img-slider" style={{ height: '100px' }}>
                <img
                  src="../../public/img/home/aa.png"
                  alt=""
                  className="img-fluid mw-100 mh-100"
                />
              </div>
              <div className="img-slider" style={{ height: '100px' }}>
                <img
                  src="../../public/img/b.png"
                  alt=""
                  className="img-fluid mw-100 mh-100"
                />
              </div>
              <div>
                <img
                  src="../../public/img/d.png"
                  alt=""
                  className="img-fluid mw-100 mh-100"
                />
              </div>
              <div>
                <img
                  src="../../public/img/da.png"
                  alt=""
                  className="img-fluid mw-100 mh-100"
                />
              </div>
              <div>
                <img
                  src="../../public/img/home/lazada-01.png"
                  alt=""
                  className="img-fluid mw-100 mh-100"
                />
              </div>
              <div>
                <img
                  src="../../public/img/n.png"
                  alt=""
                  className="img-fluid mw-100 mh-100"
                />
              </div>
              <div>
                <img
                  src="../../public/img/q1.png"
                  alt=""
                  className="img-fluid mw-100 mh-100"
                />
              </div>
              <div>
                <img
                  src="../../public/img/q2.png"
                  alt=""
                  className="img-fluid mw-100 mh-100"
                />
              </div>
              <div>
                <img
                  src="../../public/img/q4.png"
                  alt=""
                  className="img-fluid mw-100 mh-100"
                />
              </div>

              <div>
                <img
                  src="../../public/img/q6.png"
                  alt=""
                  className="img-fluid mw-100 mh-100"
                />
              </div>
              <div>
                <img
                  src="../../public/img/q7.png"
                  alt=""
                  className="img-fluid mw-100 mh-100"
                />
              </div>
              <div>
                <img
                  src="../../public/img/r.png"
                  alt=""
                  className="img-fluid mw-100 mh-100"
                />
              </div>
              <div>
                <img
                  src="../../public/img/s.png"
                  alt=""
                  className="img-fluid mw-100 mh-100"
                />
              </div>
              <div>
                <img
                  src="../../public/img/t.png"
                  alt=""
                  className="img-fluid mw-100 mh-100"
                />
              </div>
              <div>
                <img
                  src="../../public/img/u5.png"
                  alt=""
                  className="img-fluid mw-100 mh-100"
                />
              </div>
              <div>
                <img
                  src="../../public/img/u7.png"
                  alt=""
                  className="img-fluid mw-100 mh-100"
                />
              </div>
              <div>
                <img
                  src="../../public/img/u8.png"
                  alt=""
                  className="img-fluid mw-100 mh-100"
                />
              </div>
              <div>
                <img
                  src="../../public/img/Untitled-2.png"
                  alt=""
                  className="img-fluid mw-100 mh-100"
                />
              </div>
              <div>
                <img
                  src="../../public/img/wa.png"
                  alt=""
                  className="img-fluid mw-100 mh-100"
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}
