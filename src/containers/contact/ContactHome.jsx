import React from 'react';

const ContactHome = () => {
    return (
        <div className="bc-contact">
            <section className="about-area section-gap">
          <div className="container">
     <div className="row align-items-center justify-content-start">
       <div className=" col-lg-6 col-md-6" >
         <div className="contact-us">
           <br/><br/><br/>
           <h2 >
             Contact Us
           </h2>
           
         </div>
         <div>
           <p className="contact-p">
               We'e love to hear from you! Just send us a message!
           
               We are located in the heart of Surabaya, Indonesia.</p>
         </div>
      
         <div className="contact-pic-1">
     
           <br/><br/>
             <img  src="/public/img/flamenco-message-sent.png" alt="" width="100px"/>
             
         </div>
         <div className="line-contact">
           <hr/>
         </div>
         <div className="contact">
             <b>
               <div className="hi-contact">
             <p><img src="/public/img/Group 79.png" alt=""/>   Hi! What's your name? *</p>
             </div>
             <div>
             <input type="" className="input-contact text-muted" placeholder="Type your name here..."></input>
             </div>
             </b>
              <div>
             <button type="button" className="btn button-contact">Done</button>
             <p className="enter">press ENTER</p>
             </div>
         </div>
         <br/><br/>
         <div className="contact">
             <b>
               <div className="hi-contact">
             <p><img src="/public/img/Group 79.png" alt=""/> What would you like to talk about Twiscode? *</p>
             </div>
             <input type="" className="input-contact text-muted" placeholder="Type your name here..."></input>
             </b>
             <div>
             <button type="button" className="btn button-contact">Done</button>
             <p className="enter">press ENTER</p>
             </div>
         </div>
         <br/><br/>
         <div className="contact">
             <b>
               <div className="hi-contact">
             <p><img src="/public/img/Group 79.png" alt=""/>And your email addres so we can get back to you? *</p>
             </div>
             <input type="" className="input-contact text-muted" placeholder="Type your name here..."></input>
             </b>
             <div>
             <button type="button" className="btn button-contact">Done</button>
             <p className="enter">press ENTER</p>
             </div>
         </div>
         <img className="icon-contact" src="../../public/img/home/icon1.png" alt=""/>
       </div>
     </div>
   </div>
 </section>
        </div>
    );
};

export default ContactHome;