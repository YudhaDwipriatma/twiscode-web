/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import HomeBanner from './HomeBanner';
import HomeAbout from './HomeAbout';
import HomeService from './HomeService'; 
import HomeKerjasama from './HomeKerjasama';
import HomeProject from './HomeProject';
import HomeSlide from './HomeSlide';
import HomeTeam from './HomeTeam';
import HomeNomer from './HomeNomer';
import HomeFooter from './HomeFooter';
import ScrollUp from './ScrollUp';

const Home = () => (
  <div>
    <HomeBanner />
    <HomeAbout />
    <HomeService />
    <br/>
    <br/>
    <br/>
    <HomeKerjasama /> 
    <HomeSlide /> 
    <HomeProject />
    <br/>
    <br/>
    <HomeTeam />
    <HomeNomer />
    <HomeFooter />
    {/* <ScrollUp /> */}
  </div>
);

export default Home;
