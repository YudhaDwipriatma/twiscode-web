import React from 'react';
import { NavLink } from "react-router-dom";

const careersHome = () => {
    return (
        <div className="bc-careers">
            <section className="about-area section-gap">
          <div className="container">
     <div className="row align-items-center justify-content-start">
       <div className=" col-lg-6 col-md-6" >
         <div className="careers-us">
           <br/><br/><br/>
           <h2>
             Career
           </h2>
           
         </div>
         <div>
           <p className="careers-p">Join our team now!</p>
         </div>
      
         <div className="careers-pic-1">
     
           <br/><br/>
             <img  src="/public/img/home/flamenco-come-back-later.png" alt="" width="100px"/>
             
         </div>
         <div className="line-careers">
           <hr/>
         </div>
         <div className="dev-web">
           <NavLink to="">FULL STACK WEB DEVELOPPER (FULL TIME)</NavLink>
         </div>
         <div className="dev-android">
           <NavLink to="">ANDROID DEVELOPPER (FULL TIME&PART TIME)</NavLink>
         </div>
         <div className="dev-ios">
           <NavLink to="">IOS DEVELOPER</NavLink>
         </div>
         <br/>
         <div className="text-careers">
            <p>We have a growing demand of both Web Application and Mobile
                 Application from Startups to Multinational Companies. 
                 The Full Stack Developer will get exposures in creating 
                 responsive websites, setting up web services as well as 
                 trying out new technologies in web development.</p>
         </div>
         <br/><br/><br/>
         <div className="requirement">
             <h1>Requirements :</h1>
         </div>
         <div className="requirement-1">
           <li>Having at least 2 year experience in PHP & JS</li>
           <li>Having at least 1 year experience in either Laravel or React + Redux</li>
           <li>Having worked in a Team</li>
           <li>Familiar with Scrum</li>
           <li>Responsible & able to work under pressure</li>
         </div>
         <br/><br/><br/><br/>
         <div className="apply">
           <h1>APPLY NOW</h1>
         </div>
         <div className="careers-home">
             
      
   
      
       </div>
       </div>
     </div>
   </div>
 </section>
        </div>
    );
};

export default careersHome;