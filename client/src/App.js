// // import logo from './logo.svg';
// import React from 'react';
// import './App.css';
// import Header from './component/Navbar';
// // import { Outlet } from "react-router-dom";
// import Grid from '@mui/material/Grid';
// import Home from './pages/Home';
// import Login from './pages/Login'
// import SignUp from './pages/Signup';

// function App() {
//   return (
//     <Grid container>
//  <Header>
//      <Home />
//      <Login />
//      <SignUp />
//  </Header>
// </Grid>
// );

// }
// export default App;


import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Search from './components/Search/Search';
import Explore from './components/Explore/Explore';
import Adventure from './components/Adventure/Adventure';
import Booking from './components/Booking/Booking';
import Gallery from './components/Gallery/Gallery';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup'
import Contact from './components/Contact/Contact';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Fragment>
      <Navbar />
      <Banner />
      <Search />
      <Explore />
      <Adventure />
      <Booking />
      <Gallery />
      <Signin />
      <Signup />
      <Contact />
      <Footer />
      </Fragment>
    </Router>
  );
}

export default App;