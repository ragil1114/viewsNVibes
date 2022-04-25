import React, { Component } from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import Imgone from '../../images/banner9.jpg';
import Imgtwo from '../../images/banner6.jpg';
import Imgthree from '../../images/banner7.jpg';
import './Banner.css';
import { Link } from 'react-router-dom';

class Banner extends Component {
    render() {
        return (
            <section className="slider" id="home">
                <ul className="slides">
                    <li>
                        <img src={Imgone} alt="Vacation" />
                        <div className="caption center-align">
                            <h2>Pick Your Destination</h2>
                            <h5 className="light grey-text text-lighten-3 hide-on-small-only">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam non illo earum cumque id est!</h5>
                            <Link to="#" className="btn btn-large purple">Learn More</Link>
                        </div>
                    </li>
                    <li>
                        <img src={Imgtwo} alt="Budgets" />
                        <div className="caption left-align">
                            <h2>Book For Your Trip</h2>
                            <h5 className="light grey-text text-lighten-3 hide-on-small-only">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam non illo earum cumque id est!</h5>
                            <Link to="#" className="btn btn-large purple">Learn More</Link>
                        </div>
                    </li>
                    <li>
                        <img src={Imgthree} alt="Getaways" />
                        <div className="caption right-align">
                            <h2>Relax And Enjoy</h2>
                            <h5 className="light grey-text text-lighten-3 hide-on-small-only">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam non illo earum cumque id est!</h5>
                            <Link to="#" className="btn btn-large purple">Learn More</Link>
                        </div>
                    </li>
                </ul>
            </section>
        );
    }
}

export default Banner;