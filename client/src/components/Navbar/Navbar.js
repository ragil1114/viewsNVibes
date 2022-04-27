import React, { Component } from 'react';
import '../../../../node_modules/materialize-css/dist/css/materialize.min.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const SmoothScroll = () => {
  return (
    <section>
      <div className="navbar-fixed">
        <nav className="purple">
          <div className="container">
            <div className="nav-wrapper">
              <AnchorLink href="!#" className="brand-logo">
                ViewsN'Vibes
              </AnchorLink>
              <AnchorLink
                href="!#"
                data-target="mobile-demo"
                className="sidenav-trigger"
              >
                <i className="material-icons">menu</i>
              </AnchorLink>
              <ul className="right hide-on-med-and-down">
                <li>
                  <AnchorLink href="#home">Home</AnchorLink>
                </li>
                <li>
                  <AnchorLink href="#search">Search</AnchorLink>
                </li>
                {/* <li>
                  <AnchorLink href="#explore">Explore</AnchorLink>
                </li> */}
                <li>
                  <AnchorLink href="#adventure">Adventures</AnchorLink>
                </li>
                <li>
                  <AnchorLink href="#gallery">Gallery</AnchorLink>
                </li>
                <li>
                  <AnchorLink href="#signin">Sign In</AnchorLink>
                </li>
                <li>
                  <AnchorLink href="#signup">Sign Up</AnchorLink>
                </li>
                <li>
                  <AnchorLink href="#contact">Contact</AnchorLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <ul className="sidenav" id="mobile-demo">
        {/* <li>
            <div className="user-view">
              <div className="background">
                  <img src={Imgbackground} alt="ocean" />
              </div>
              <AnchorLink href="#user"><img className="circle" src={Imgperson} alt="person" /></AnchorLink>
              <AnchorLink href="#name"><span className="white-text name">John Doe</span></AnchorLink>
              <AnchorLink href="#email"><span className="white-text email">jdandturk@gmail.com</span></AnchorLink>
            </div>
          </li> */}
        <li>
          <AnchorLink href="#home">Home</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#search">Search</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#explore">Explore</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#adventure">Adventures</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#gallery">Gallery</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#contact">Contact</AnchorLink>
        </li>
      </ul>
    </section>
  );
};

class Navbar extends Component {
  render() {
    return (
      <section>
        <SmoothScroll />
      </section>
    );
  }
}

export default Navbar;
