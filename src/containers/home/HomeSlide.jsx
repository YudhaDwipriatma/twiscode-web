import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="text-center">
        <Slider {...settings}>
        <div className="card mb-3 shadow p-3 mb-5 bg-white rounded" style="max-width: 540px;">
              <div className="row no-gutters">
                 <div className="col-md-4">
                    <img src="../../public/img/home/Path 3.png" class="card-img" alt="..." />
                  </div>
            <div className="col-md-8">
                <div className="card-body">
                      <img className="logo-slide" src="../../public/img/home/income.png" alt=""/>
                      <p className="card-text card-texts">"I've never used a theme as versatile and flexible as Twiscode. It's my go to for building landing sites on almost any project."</p>
                    </div>
                </div>
              </div>
            </div>

            <div className="card mb-3 shadow p-3 mb-5 bg-white rounded" style="max-width: 540px;">
              <div className="row no-gutters">
                 <div className="col-md-4">
                    <img src="../../public/img/home/Path 3.png" class="card-img" alt="..." />
                  </div>
            <div className="col-md-8">
                <div className="card-body">
                      <img className="logo-slide" src="../../public/img/home/income.png" alt=""/>
                      <p className="card-text card-texts">"I've never used a theme as versatile and flexible as Twiscode. It's my go to for building landing sites on almost any project."</p>
                    </div>
                </div>
              </div>
            </div>

         <div className="card mb-3 shadow p-3 mb-5 bg-white rounded" style="max-width: 540px;">
              <div className="row no-gutters">
                 <div className="col-md-4">
                    <img src="../../public/img/home/Path 3.png" class="card-img" alt="..." />
                  </div>
            <div className="col-md-8">
                <div className="card-body">
                      <img className="logo-slide" src="../../public/img/home/income.png" alt=""/>
                      <p className="card-text card-texts">"I've never used a theme as versatile and flexible as Twiscode. It's my go to for building landing sites on almost any project."</p>
                    </div>
                </div>
              </div>
            </div>

          <div className="card mb-3 shadow p-3 mb-5 bg-white rounded" style="max-width: 540px;">
              <div className="row no-gutters">
                 <div className="col-md-4">
                    <img src="../../public/img/home/Path 3.png" class="card-img" alt="..." />
                  </div>
            <div className="col-md-8">
                <div className="card-body">
                      <img className="logo-slide" src="../../public/img/home/income.png" alt=""/>
                      <p className="card-text card-texts">"I've never used a theme as versatile and flexible as Twiscode. It's my go to for building landing sites on almost any project."</p>
                    </div>
                </div>
              </div>
            </div>

          <div className="card mb-3 shadow p-3 mb-5 bg-white rounded" style="max-width: 540px;">
              <div className="row no-gutters">
                 <div className="col-md-4">
                    <img src="../../public/img/home/Path 3.png" class="card-img" alt="..." />
                  </div>
            <div className="col-md-8">
                <div className="card-body">
                      <img className="logo-slide" src="../../public/img/home/income.png" alt=""/>
                      <p className="card-text card-texts">"I've never used a theme as versatile and flexible as Twiscode. It's my go to for building landing sites on almost any project."</p>
                    </div>
                </div>
              </div>
            </div>

          <div className="card mb-3 shadow p-3 mb-5 bg-white rounded" style="max-width: 540px;">
              <div className="row no-gutters">
                 <div className="col-md-4">
                    <img src="../../public/img/home/Path 3.png" class="card-img" alt="..." />
                  </div>
            <div className="col-md-8">
                <div className="card-body">
                      <img className="logo-slide" src="../../public/img/home/income.png" alt=""/>
                      <p className="card-text card-texts">"I've never used a theme as versatile and flexible as Twiscode. It's my go to for building landing sites on almost any project."</p>
                    </div>
                </div>
              </div>
            </div>
        </Slider>
      </div>
    );
  }
}