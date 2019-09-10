import React from 'react';
import Iframe from 'react-iframe'

const HomeNomer = () => {
  return (
    <div>
      <div className="container" style={{ marginBottom:'138px'}}>
        <h2 className="-text-loc text-center hr-text-loc">LOCATION</h2>
       
      <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.7600079396757!2d112.74611961435113!3d-7.268128973431511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fc0b8ee711ab%3A0x84a7521f5f8cc186!2sTwiscode+Digital+Agency!5e0!3m2!1sen!2sid!4v1565670797319!5m2!1sen!2sid" 
              width="800" 
              height="450" 
              frameborder="0" 
              style="border:0" 
              allowfullscreen />
        </div>
    </div>
  );
};

export default HomeNomer;