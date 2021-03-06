import React, { Component } from "react";
import Slider from "react-slick";


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
      <section className="page-section" id="services">

      <section className="">
      <div className="container-fluid">
      <div className="wrapper-team">
      <div className="slider">
        <h2 className="team text-center no-span"> MEET OUR TEAM. </h2>
        <p className="text-muted text-center">We have teams of great developers ready to help you grow your business</p>

    
    
    
        <Slider {...settings} className="button-team">
  
         <div className="card-body">
  
        <img className="card-body"  width="150px" src="../../public/img/1.png" alt=""/> 
        <h2 className="text-center">Andree Wijaya</h2>
          <p className="text-muted text-center">CEO/CTO</p>
          </div>
          <div className="card-body">
 
         <img className="card-body" width="150px" src="../../public/img/2.png" alt=""/>
          <h2 className="text-center">Elisabeth Be</h2>
          <p className="text-muted text-center">CPO</p>
          </div>
          <div className="card-body">
            
         <img className="card-body" width="150px" src="../../public/img/3.png" alt=""/>
          <h2 className="text-center">Sanjaya Wahono</h2>
          <p className="text-muted text-center">CFO</p>
          </div>

          <div className="card-body">
            
         <img className="card-body" width="150px" src="../../public/img/4.png" alt=""/>
          <h2 className="text-center">Mariska</h2>
          <p className="text-muted text-center">HRD</p>
          </div>
          <div className="card-body">
            
         <img className="card-body" width="150px" src="../../public/img/5.png" alt=""/>
          <h2 className="text-center">Felicia</h2>
          <p className="text-muted text-center">Project Manager</p>
          </div>
          <div className="card-body">
            
         <img className="card-body" width="150px" src="../../public/img/6.png" alt=""/>
          <h2 className="text-center">Hana</h2>
          <p className="text-muted text-center">Project Manager</p>
          </div>
          <div className="card-body">
            
         <img className="card-body" width="150px" src="../../public/img/7.png" alt=""/>
          <h2 className="text-center">Fanny</h2>
          <p className="text-muted text-center">Project Manager</p>
          </div>
          <div className="card-body">
            
         <img className="card-body" width="150px" src="../../public/img/8.png" alt=""/>
          <h2 className="text-center">Hafshah</h2>
          <p className="text-muted text-center">Project Manager</p>
          </div> 
          <div className="card-body">
            
         <img className="card-body" width="150px" src="../../public/img/9.png" alt=""/>
          <h2 className="text-center">Bahtiar</h2>
          <p className="text-muted text-center">Lead Backend</p>
          </div> 
          <div className="card-body">
            
         <img className="card-body" width="150px" src="../../public/img/10.png" alt=""/>
          <h2 className="text-center">Ivan</h2>
          <p className="text-muted text-center">Project Manager</p>
          </div>           
          <div className="card-body">
            
         <img className="card-body" width="150px" src="../../public/img/11.png" alt=""/>
          <h2 className="text-center">Wawan</h2>
          <p className="text-muted text-center">Project Manager</p>
          </div> 
          <div className="card-body">
            
         <img className="card-body" width="150px" src="../../public/img/12.png" alt=""/>
          <h2 className="text-center">Dimas</h2>
          <p className="text-muted text-center">Project Manager</p>
          </div>
          <div className="card-body">
            
         <img className="card-body" width="150px" src="../../public/img/13.png" alt=""/>
          <h2 className="text-center">Andika</h2>
          <p className="text-muted text-center">Project Manager</p>
          </div> 
          <div className="card-body">
            
         <img className="card-body" width="150px" src="../../public/img/14.png" alt=""/>
          <h2 className="text-center">Agus</h2>
          <p className="text-muted text-center">Project Manager</p>
          </div>
          <div className="card-body">
            
         <img className="card-body" width="150px" src="../../public/img/15.png" alt=""/>
          <h2 className="text-center">David</h2>
          <p className="text-muted text-center">Project Manager</p>
          </div>
          <div className="card-body">
            
         <img className="card-body" width="150px" src="../../public/img/16.png" alt=""/>
          <h2 className="text-center">Andika</h2>
          <p className="text-muted text-center">Project Manager</p>
          </div>
          <div className="card-body">
            
         <img className="card-body" width="150px" src="../../public/img/17.png" alt=""/>
          <h2 className="text-center">Rizal</h2>
          <p className="text-muted text-center">Project Manager</p>
          </div>
          <div className="card-body">
            
         <img className="card-body" width="150px" src="../../public/img/18.png" alt=""/>
          <h2 className="text-center">Ikhwan</h2>
          <p className="text-muted text-center">Project Manager</p>
          </div>
          <div className="card-body">
            
         <img className="card-body" width="150px" src="../../public/img/19.png" alt=""/>
          <h2 className="text-center">Niko</h2>
          <p className="text-muted text-center">Project Manager</p>
          </div>
          <div className="card-body">
            
         <img className="card-body" width="150px" src="../../public/img/20.png" alt=""/>
          <h2 className="text-center">Adawiyah</h2>
          <p className="text-muted text-center">Project Manager</p>
          </div>
          <div className="card-body">
            
         <img className="card-body" width="150px" src="../../public/img/21.png" alt=""/>
          <h2 className="text-center">Yudha</h2>
          <p className="text-muted text-center">Project Manager</p>
          </div>
          <div className="card-body">
            
         <img className="card-body" width="150px" src="../../public/img/22.png" alt=""/>
          <h2 className="text-center">Maulana</h2>
          <p className="text-muted text-center">Project Manager</p>
          </div>
          <div className="card-body">
            
         <img className="card-body" width="150px" src="../../public/img/23.png" alt=""/>
          <h2 className="text-center">Sogi</h2>
          <p className="text-muted text-center">Project Manager</p>
          </div>
          <div className="card-body">
            
         <img className="card-body" width="150px" src="../../public/img/24.png" alt=""/>
          <h2 className="text-center">Yuni</h2>
          <p className="text-muted text-center">Mobile Apps</p>
          </div>
          <div className="card-body">
            
         <img className="card-body" width="150px" src="../../public/img/25.png" alt=""/>
          <h2 className="text-center">Yoga</h2>
          <p className="text-muted text-center">Mobile Apps</p>
          </div>
          <div className="card-body">
            
         <img className="card-body" width="150px" src="../../public/img/26.png" alt=""/>
          <h2 className="text-center">Rangga</h2>
          <p className="text-muted text-center">Mobile Apps</p>
          </div>
          <div className="card-body">
            
         <img className="card-body" width="150px" src="../../public/img/27.png" alt=""/>
          <h2 className="text-center">Alfiyah</h2>
          <p className="text-muted text-center">Mobile Apps</p>
          </div>
          
         
   
        </Slider>
      </div>
      </div>
        </div>
          </section>
 
      </section>
    );
  }
}