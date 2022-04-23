// import logo from './logo.svg';
import React from 'react';
// import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from '../src/Component/NavBar';
import Home from './pages/Home'
import Login from './pages/Login';
import SignUp from './pages/Signup';

function App() {
  return (
    <Router>
    <Header />
    <Routes>
      <Route exact path="/" element={Home} />
      <Route exact path="/Login" element={Login} />
      <Route exact path="/Signup" element={SignUp} />
    </Routes>
  </Router>
);

}
export default App;