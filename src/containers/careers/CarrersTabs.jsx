import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

class CarrersTabs extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1'
        };
      }
    
      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }

    render() {
        return (
            <div>
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
    <section className="tabs">
        <Nav tabs>
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              <h2 className="car-web">FULL STACK WEB DEVELOPER (FULL TIME)</h2>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
               <h2 className="car-andro">ANDROID DEVELOPER (FULL TIME & PART TIME)</h2>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{marginLeft:'-293px'}} className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
               <h2 className="car-ios">IOS DEVELOPER</h2>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12" style={{marginLeft:'-40px'}}>
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
                  <h1>APPLY NOW!</h1>
              </div>
              <br/>
              <div>
              <form>
              <label className="label-career" for="fname">Your Name (required)</label>
              <input className="input-career" type="text" id="fname" name="fname" />
              <br/><br/>
              <label className="label-career" for="fname">Your Email (required)</label>
              <input className="input-career" type="text" id />
              <br/><br/>
              <label className="label-career" for="fname">Subject</label>
              <input className="input-career" type="text" id="fname" name="fname" />
              </form>
              <br/><br/>
              <form>
              <label className="label-career" for="fname">Your Massage</label>
              <input className="input-career-1" type="text" id="fname" name="fname" />
              </form>
              <br/>
              <h1 className="attach">Attach Your CV</h1>
                <button type="button" className="btn button-career">Choose File</button>
                  <p className="enter-career">No File Chosen</p>
                    <br/><br/>
                <button type="button" className="btn button-career-1">SEND</button>
             </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
            <Col sm="12" style={{marginLeft:'-40px'}}>
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
              
                  <br/><br/><br/><br/>
              <div className="apply">
                  <h1>APPLY NOW!</h1>
              </div>
              <br/>
              <div>
              <form>
              <label className="label-career" for="fname">Your Name (required)</label>
              <input className="input-career" type="text" id="fname" name="fname" />
              <br/><br/>
              <label className="label-career" for="fname">Your Email (required)</label>
              <input className="input-career" type="text" id />
              <br/><br/>
              <label className="label-career" for="fname">Subject</label>
              <input className="input-career" type="text" id="fname" name="fname" />
              </form>
              <br/><br/>
              <form>
              <label className="label-career" for="fname">Your Massage</label>
              <input className="input-career-1" type="text" id="fname" name="fname" />
              </form>
              <br/>
              <h1 className="attach">Attach Your CV</h1>
                <button type="button" className="btn button-career">Choose File</button>
                  <p className="enter-career">No File Chosen</p>
                    <br/><br/>
                <button type="button" className="btn button-career-1">SEND</button>
             </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
            <Col sm="12" style={{marginLeft:'-40px'}}>
              <div className="text-careers">
                 
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
                  <h1>APPLY NOW!</h1>
              </div>
              <br/>
              <div>
              <form>
              <label className="label-career" for="fname">Your Name (required)</label>
              <input className="input-career" type="text" id="fname" name="fname" />
              <br/><br/>
              <label className="label-career" for="fname">Your Email (required)</label>
              <input className="input-career" type="text" id />
              <br/><br/>
              <label className="label-career" for="fname">Subject</label>
              <input className="input-career" type="text" id="fname" name="fname" />
              </form>
              <br/><br/>
              <form>
              <label className="label-career" for="fname">Your Massage</label>
              <input className="input-career-1" type="text" id="fname" name="fname" />
              </form>
              <br/>
              <h1 className="attach">Attach Your CV</h1>
                <button type="button" className="btn button-career">Choose File</button>
                  <p className="enter-career">No File Chosen</p>
                    <br/><br/>
                <button type="button" className="btn button-career-1">SEND</button>
             </div>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
        </section>
            </div>
          </div>
        </div>
      </section>
        </div>
            </div>
        );
    }
}

export default CarrersTabs;