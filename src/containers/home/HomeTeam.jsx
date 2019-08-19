import React, { Component } from "react";
import Slider from "react-slick";
import { team } from '../../helpers/data'

export default class Responsive extends Component {
  state = {
    activeTeamId: 1
  }

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

    const { activeTeamId} =this.state;
    return (
      <section className="page-section" id="services">

      <section className="">
      <div className="container-fluid">
      <div className="wrapper-team">
        <img className="tim" src="../../public/img/home/tim.png" alt=""/>
      <div className="slider">
        <h2 className="team text-center no-span"> MEET OUR TEAM. </h2>
        <p className="text-muted text-center text-team">We have teams of great developers ready to help you grow your business</p>

    
    
    
        <Slider {...settings} className="button-team">
        {
          team.map((data)=>(
          <div className={`card-body ${activeTeamId === data.id ? 'active' : ''}`} key={data.id} onClick={this}>
            <img className="card-body"  width="150px" src={data.image} alt=""/> 
            <h2 className="text-center username">{data.name}</h2>
            <p className="text-muted text-center title">{data.title}</p>
          </div>

          ))
        }
        </Slider>
      </div>
      </div>
        </div>
          </section>
      </section>
    );
  }
}