import React, { Component, useState } from 'react';
import { Nav,  Modal, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../../../../node_modules/materialize-css/dist/css/materialize.min.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Signup from '../Signup/Signup';
import Signin from '../Signin/Signin';


import Auth from '../../utils/auth';







const SmoothScroll = () => {

  const [showModal, setShowModal] = useState(false);

  return (
    <section>
      
      <div className="navbar-fixed">
        <nav className="purple">
          <div className="container">
            <div className="nav-wrapper">
              <AnchorLink href="#home" className="brand-logo">
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
              
                <li>
                  <AnchorLink href="#signin">Sign In</AnchorLink>
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
        <AnchorLink href="#signin">Sign In</AnchorLink>
      </li>
      <li>
        <AnchorLink href="#signup">Sign Up</AnchorLink>
      </li>
        <li>
          <AnchorLink href="#contact">Contact</AnchorLink>
        </li>
      </ul>



          {/* set modal data up */}
      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Sign In</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <Signin handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <Signup handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>





    </section>
  );
};

class AppNavbar extends Component {
  render() {
    return (
      <section>
        <SmoothScroll />
      </section>
    );
  }
}

export default AppNavbar;
