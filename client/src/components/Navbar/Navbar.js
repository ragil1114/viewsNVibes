import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Modal, Tab } from 'react-bootstrap';
import '../../../../node_modules/materialize-css/dist/css/materialize.min.css';

import Signup from '../Signup/Signup';
import Signin from '../Signin/Signin';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';


import Auth from '../../utils/auth';

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
    
      {/* <Navbar className="navStyle"> */}
      
      <div className="navbar-fixed">
      <nav className="blue lighten-3">

      <div className="container">
      <div className="nav-wrapper">
        {/* <Container fluid> */}
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

      <ul className="sidenav"  id="mobile-demo">
     
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




          {/* </Navbar.Brand> */}
          {/* <Navbar.Toggle aria-controls='navbar' /> */}
          <Navbar.Collapse id='navbar'>
            <Nav className='ml-auto'>
              <Nav.Link as={Link} to='/'>
                Search For Tours
              </Nav.Link>
              
              {/* if user is logged in show saved books and logout */}
              {Auth.loggedIn() ? (
                <>
                  {/* <Nav.Link as={Link} to='/saved'>
                    See Your Tours
                  </Nav.Link> */}
                  <Nav.Link onClick={Auth.logout}>Sign Out</Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={() => setShowModal(true)}>Sign In</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        {/* </Container> */}
        

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
                  <Nav.Link eventKey='/'>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='search'>Search</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
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
    


      

      {/* </Navbar> */}


      
    </>
  );
};

export default AppNavbar;