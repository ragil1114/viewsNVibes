import React, { Component } from 'react';
import '../../../../node_modules/materialize-css/dist/css/materialize.min.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import img1 from '../../images/header6.jpg';
import img2 from '../../images/header7.jpg';
import img3 from '../../images/header4.jpg';
import img4 from '../../images/header1.jpg';
import img5 from '../../images/header9.jpg';
import img6 from '../../images/banner5.jpg';


import './Banner.css';
import { Link } from 'react-router-dom';

class Banner extends Component {
  render() {
    return (
      <section className="slider" id="home">
        <ul className="slides">
          <li>
            <img src={img1} alt="Vacation" />
            <div className="caption center-align">
              <h2>Pick Your Destination</h2>
              <h5 className="light grey-text text-lighten-3 hide-on-small-only">Simply search a location you would like to visit, and get connected </h5>
              <AnchorLink href="#search" className="btn btn-large purple">Get Started</AnchorLink>
            </div>
          </li>
          <li>
            <img src={img2} alt="Budgets" />
            <div className="caption left-align">
              <h2>Book a Tour For Your Trip</h2>
              <h5 className="light grey-text text-lighten-3 hide-on-small-only">By creating an account, you can have access to our tour guides </h5>
              <AnchorLink href="#search" className="btn btn-large purple">Get Started</AnchorLink>
              
            </div>
          </li>
          <li>
          <img src={img3} alt="Getaways" />
            <div className="caption right-align">
              <h2>Let Us Do The Rest</h2>
              <h5 className="light grey-text text-lighten-3 hide-on-small-only">Just book your flight, and we have your itinerary covered when you select one of our Tour Guides</h5>
              <AnchorLink href="#search" className="btn btn-large purple">Get Started</AnchorLink>
             
            </div>
          </li>
            {/* repeat slides with different images */}
          <li>
            <img src={img4} alt="Vacation" />
            <div className="caption center-align">
              <h2>Pick Your Destination</h2>
              <h5 className="light grey-text text-lighten-3 hide-on-small-only">Simply search a location you would like to visit, and get connected. </h5>
              <AnchorLink href="#search" className="btn btn-large purple">Get Started</AnchorLink>
              
            </div>
          </li>
          <li>
            <img src={img5} alt="Budgets" />
            <div className="caption left-align">
              <h2>Book a Tour For Your Trip</h2>
              <h5 className="light grey-text text-lighten-3 hide-on-small-only">By creating an account, you can have access to our tour guides </h5>
              <AnchorLink href="#search" className="btn btn-large purple">Get Started</AnchorLink>
              
            </div>
          </li>
          <li>
          <img src={img6} alt="Getaways" />
            <div className="caption right-align">
              <h2>Let Us Do The Rest</h2>
              <h5 className="light grey-text text-lighten-3 hide-on-small-only">Just book your flight, and we have your itinerary covered when you select one of our Tour Guides</h5>
              <AnchorLink href="#search" className="btn btn-large purple">Get Started</AnchorLink>
              
            </div>
          </li>
        </ul>
        
      </section>
    );
  }
}

export default Banner;