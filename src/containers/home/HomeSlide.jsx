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
      <div className="text-center section-slide">
        <div className="card-slide mx-auto">
        <Slider {...settings}>
        {/* <div className="card mb-3 path-2"> */}
            <div className="card mb-3 path-2" >
              <div className="row no-gutters">
                 <div className="col-md-4">
                    <img src="../../public/img/home/Path 3.png" className="card-img" alt="..." />
                  </div>
            <div className="col-md-8">
                <div className="card-body">
                      <img className="logo-slide" src="../../public/img/home/income.png" alt=""/>
                      <p className="card-text card-texts">"I've never used a theme as versatile and flexible as Twiscode. It's my go to for building landing sites on almost any project."</p>
                      <p className="card-text"><small className="text-muted text-small">Dave Gamache</small></p>
                    </div>
                </div>
              </div>
              </div>
            {/* </div> */}

            <div className="card mb-3 path-2" >
              <div className="row no-gutters">
                 <div className="col-md-4">
                    <img src="../../public/img/home/Path 3.png" className="card-img" alt="..." />
                  </div>
            <div className="col-md-8">
                <div className="card-body">
                      <img className="logo-slide" src="../../public/img/home/income.png" alt=""/>
                      <p className="card-text card-texts">"I've never used a theme as versatile and flexible as Twiscode. It's my go to for building landing sites on almost any project."</p>
                      <p className="card-text"><small className="text-muted text-small">Dave Gamache</small></p>
                    </div>
                </div>
              </div>
            </div>

         <div className="card mb-3 path-2" >
              <div className="row no-gutters">
                 <div className="col-md-4">
                    <img src="../../public/img/home/Path 3.png" className="card-img" alt="..." />
                  </div>
            <div className="col-md-8">
                <div className="card-body">
                      <img className="logo-slide" src="../../public/img/home/income.png" alt=""/>
                      <p className="card-text card-texts">"I've never used a theme as versatile and flexible as Twiscode. It's my go to for building landing sites on almost any project."</p>
                      <p className="card-text"><small className="text-muted text-small">Dave Gamache</small></p>
                    </div>
                </div>
              </div>
            </div>

          <div className="card mb-3 path-2" >
              <div className="row no-gutters">
                 <div className="col-md-4">
                    <img src="../../public/img/home/Path 3.png" className="card-img" alt="..." />
                  </div>
            <div className="col-md-8">
                <div className="card-body">
                      <img className="logo-slide" src="../../public/img/home/income.png" alt=""/>
                      <p className="card-text card-texts">"I've never used a theme as versatile and flexible as Twiscode. It's my go to for building landing sites on almost any project."</p>
                      <p className="card-text"><small className="text-muted text-small">Dave Gamache</small></p>
                    </div>
                </div>
              </div>
            </div>

          <div className="card mb-3 path-2" >
              <div className="row no-gutters">
                 <div className="col-md-4">
                    <img src="../../public/img/home/Path 3.png" className="card-img" alt="..." />
                  </div>
            <div className="col-md-8">
                <div className="card-body">
                      <img className="logo-slide" src="../../public/img/home/income.png" alt=""/>
                      <p className="card-text card-texts">"I've never used a theme as versatile and flexible as Twiscode. It's my go to for building landing sites on almost any project."</p>
                      <p className="card-text"><small className="text-muted text-small">Dave Gamache</small></p>
                    </div>
                </div>
              </div>
            </div>

          <div className="card mb-3 path-2" >
              <div className="row no-gutters">
                 <div className="col-md-4">
                    <img src="../../public/img/home/Path 3.png" className="card-img" alt="..." />
                  </div>
            <div className="col-md-8">
                <div className="card-body">
                      <img className="logo-slide" src="../../public/img/home/income.png" alt=""/>
                      <p className="card-text card-texts">"I've never used a theme as versatile and flexible as Twiscode. It's my go to for building landing sites on almost any project."</p>
                      <p className="card-text"><small className="text-muted text-small">Dave Gamache</small></p>
                    </div>
                </div>
              </div>
            </div>
        </Slider>
        </div>
      </div>
    );
  }
}