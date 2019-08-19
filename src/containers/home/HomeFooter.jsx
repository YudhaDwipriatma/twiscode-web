import React from 'react';

const HomeFooter = () => {
    return (
        <div>
             <div className="footer-top">
            <div className="col-lg-5 col-md-6 col-sm-6">
              
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 social-widget">
              <div className="single-footer-widget" style={{marginLeft:'609px', marginTop:'30px'}}>
                <div className="no-socia ld-flex align-items-center">
                <a href="#">
                <img className="telepon" src="../../public/img/home/Group 103.png" alt="" />
                <img className="footer-img-3"  src="../../public/img/home/08123434488.png" alt="" />
              </a>
              <a href="#">
                <img className="email" src="../../public/img/home/Group 102.png" alt=""/>
                <img className="footer-img-2" src="../../public/img/home/andree@twisode.com.png" alt=""/>
              </a>
              <a href="#">
                <img className="location" src="../../public/img/home/Group 101.png" alt="" />
                <img className="footer-img-1" src="../../public/img/home/Scomptec Building Jl. Kayun no.24 (R. 303 - 304) Surabaya.png" alt=""/>
              </a>
    
                  </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default HomeFooter;