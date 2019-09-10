import React from 'react';

const HomeFooter = () => {
  return (
    <div className="footer">
        <div className="footer-top">
            <div class="row" style={{ marginLeft:'100px'}}>
                <div class="col">
                  <div class="row">
                  <div class="col-1"><img src="../../public/img/Group 103.png" alt="" width="57px" /></div>
                    <div class="col name">08123434488</div>
                  </div>
                </div>
                <div class="col order-12">
                <div class="row">
                  <div class="col-1"><img src="../../public/img/Group 101.png" alt="" width="57px" /></div>
                    <div class="col-6 name">
                    <span>Scomptec Building</span> <p>Jl. Kayun no.24 (R. 303 - 304) Surabaya</p></div>
                  </div>
                </div>
                <div class="col order-1">
                <div class="row">
                  <div class="col-1"><img src="../../public/img/email@2x.png" alt="" width="57px" /></div>
                    <div class="col-2 name">andree@twisode.com</div>
                  </div>
                </div>
              </div>
      </div>
      <div class="row justify-content-between footer-buttom" style={{ marginRight:'0px'}}>
          <div class="col-6 name">
          @ 2019 Twistcode All rights reserved
          </div>
          <div class="col-4">
          <div class="row" style={{ marginLeft:'200px'}}>
          <div class="col-1" >
            <img src="../../public/img/fb.png" alt="" width="10px" />
          </div>
          <div class="col-1">
          <img src="../../public/img/twitter.png" alt="" width="20px" />
          </div>
          <div class="col-1">
          <img src="../../public/img/pi nterest.png" alt="" width="20px" />
          </div>
          <div class="col-1">
          <img src="../../public/img/dribble.png" alt="" width="20px" />
          </div>
          <div class="col-1">
          <img src="../../public/img/linkedin.png" alt="" width="20px" />
          </div>
          </div>
          </div>
         
      </div>
    </div>
  );
};

export default HomeFooter;