import React from 'react';

const ContactHome = () => {
    return (
        <div>
            <section className="about-area section-gap">
        
   
   <div className="container">
     <div className="row align-items-center justify-content-start">
       <div className=" col-lg-6 col-md-6" >
         <div className="section-title">
           
           <h2 className="mb-4 text-center">
             Contact Us
           </h2>
           
         </div>
         <div
           className="mb-35 wow fadeIn text-center"
           data-wow-duration=".8s"
           data-wow-delay=".3s"
         >
           <p>
               We'e love to hear from you! Just send us a message!
               We are located in the heart of Surabaya, Indonesia.
           </p>
         </div>
      
         <div>
             <img className="img-contact" src="/public/img/flamenco-message-sent.png" alt="" width="100px"/>
             <hr/>
         </div>
         <div className="contact">
             <b>
             <p className=""><img src="/public/img/Group 79.png" alt=""/>   Hi! What's your name? *</p>
             </b>
         </div>
        
       </div>
     </div>
   </div>
 </section>
        </div>
    );
};

export default ContactHome;