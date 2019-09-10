import React, { Component } from 'react';

class HomeProject extends Component {
  state = {
    counterProject: 0,
    counterClient: 0,
    counterMobile: 0,
    counterWeb: 0
  }

  componentDidMount() {
    this.counterProject();
    this.counterClient();
    this.counterMobile();
    this.counterWeb();
  }
  

  counterProject() {
    const interval = setInterval(foo, 1);
    const that = this
    function foo() {
          that.setState({
            counterProject: that.state.counterProject + 1
          })
          if(that.state.counterProject >= 81){
            clearInterval(interval)
          }
    }
  }

  counterClient() {
    const interval = setInterval(foo, 1);
    const that = this
    function foo() {
          that.setState({
            counterClient: that.state.counterClient + 1
          })
          if(that.state.counterClient >= 60){
            clearInterval(interval)
          }
    }
  }
  
  counterMobile() {
    const interval = setInterval(foo, 1);
    const that = this
    function foo() {
          that.setState({
            counterMobile: that.state.counterMobile + 1
          })
          if(that.state.counterMobile >= 10){
            clearInterval(interval)
          }
    }
  }

  counterWeb() {
    const interval = setInterval(foo, 5);
    const that = this
    function foo() {
          that.setState({
            counterWeb: that.state.counterWeb + 1
          })
          if(that.state.counterWeb >= 71){
            clearInterval(interval)
          }
    }
  }

  render() {
    return (
      <section className="page-section" id="services">
        <div className="container" >
        <div className="banner-img ">
        <h2 className="text-left count">Stay focused on your business</h2>
        <p className="text-left text-count">Bringin business ideas to life through use of technology and design.</p>
            <img className="img-fluid img-count" src="/public/img/icon2.png" width="300px" alt="" />
          </div>
        </div>

        <div className="container" style={{marginRight:'320px'}}  >
        <div className="row counters">
        <div className="col-lg-3 col-5 text-center count-project">
          <span data-toggle="counter-up" className="counter-project">{this.state.counterProject}</span>
          <p className="text-project">Projects</p>
        </div>
            <div className="garis"></div>
        <div className="col-lg-3 col-5 text-center count-client">
          <span data-toggle="counter-up" className="counter-client">{this.state.counterClient}</span>
          <p className="text-client">Clients</p>
        </div>
            <div className="garis2"></div>
        <div className="col-lg-3 col-5 text-center count-mobile">
          <span data-toggle="counter-up" className="counter-mobile">{this.state.counterMobile}</span>
          <p className="text-mobile">Mobile Apps</p>
        </div>
              <div className="garis3"></div>
        <div className="col-lg-3 col-5 text-center count-web" style={{marginLeft:'-28px'}}>
          <span data-toggle="counter-up" className="counter-web">{this.state.counterWeb}</span>
          <p className="text-web">Websites</p>
        </div>
        </div></div>
    </section>
    );
  }
}

export default HomeProject;

