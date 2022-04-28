import React, { Component } from 'react';
import Resort1 from '../../images/sanFran.jpg';
import Resort2 from '../../images/newOrleans.jpg';
import Resort3 from '../../images/newYork.jpg';
import tourguide1 from '../../images/Emily.jpg';
import tourguide2 from '../../images/Rico.jpg';
import tourguide3 from '../../images/Sam.jpg';

import { Link } from 'react-router-dom';

class Popular extends Component {
    render() {
        return (
            <section id="adventure" className="section section-popular scrollspy">
                <div className="container">
                    <div className="row">
                        <h4 className="center">
                            <span className="purple-text darken-1">ViewsN'Vibes</span> Top Destinations</h4>
                        <div className="col s12 m4">
                            <div className="card">
                                <div className="card-image">
                                    <img src={Resort1} alt="" />
                                    <span className="card-title">San Francisco</span>
                                    <Link to="#" className="btn-floating activator halfway-fab waves-effect waves-light purple" href="#"><i className="material-icons">add</i></Link>
                                </div>
                                <div className="card-content">
                                <p>San Francisco is a cultural, commercial, and financial center in the U.S. state of California. Located in Northern California, San Francisco is the 17th most populous city proper in the United States, and the fourth most populous in California, with 873,965 residents as of 2020
                                    </p>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">San Francisco<i className="material-icons right">close</i></span>
                                    <p><b>Walk Over the Golden Gate Bridge </b>The Golden Gate Bridge, the most famous bridge in the world, manages to impress even the most experienced travelers with its stunning 1.7-mile span.<br></br>
                                    <br></br>   <b>Ride a Cable Car</b> <br></br> The cars run on tracks and are moved by an underground cable along three routes. Each one-way ride will provide spectacular views of the city’s celebrated hills, as well as an exhilarating ride. <br></br>
                                    <br></br>   <b>Go to an Outdoor Festival</b> <br></br> Outdoor festivals are a popular San Francisco activity for people of all ages. The Yerba Buena Gardens Festival takes place during the summer months, hosting dining, shopping and cultural activities for the whole family.
                                  
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m4">
                            <div className="card">
                                <div className="card-image">
                                    <img src={Resort2} alt="" />
                                    <span className="card-title">New Orleans</span>
                                    <Link to="#"  className="btn-floating activator halfway-fab waves-effect waves-light purple"><i className="material-icons">add</i></Link>
                                </div>
                                <div className="card-content">
                                    <p>New Orleans is a Louisiana city on the Mississippi River, near the Gulf of Mexico. Nicknamed the "Big Easy," it's known for its round-the-clock nightlife, vibrant live-music scene and spicy, singular cuisine reflecting its history as a melting pot of French, African and American cultures. 
                                    </p>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">New Orleans<i className="material-icons right">close</i></span>
                                    <p><b>French Quarter</b><br></br> The French Quarter is always a must-do, any time of year. As the city’s oldest neighborhood, the Vieux Carre is packed with gorgeous architecture, loads of history, a wealth of food and music.<br></br>
                                    <br></br>  <b>National WWII Museum</b> <br></br> The National WWII Museum is a world-class complex with award-winning exhibits showcasing the stories of those who served in WWII and on the homefront. Highlights include actual planes, jeeps, and Higgins Boats, a theater with WWII-era musical performances, a restaurant, and a fantastic gift shop with 1940s-inspired gifts and clothing. <br></br>
                                    <br></br> <b>Cafe De Monde</b> <br></br> This French Quarter fixture since 1862 serves the the best cafe au lait alongside hot, fresh beignets at all hours. Take a peek in the window to see the magic happen, then dive in to your order of three. If you make it out without powdered sugar on your shirt, you're doing it wrong.
                                  
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m4">
                            <div className="card">
                                <div className="card-image">
                                    <img src={Resort3} alt="" />
                                    <span className="card-title">New York</span>
                                    <Link to="#"  className="btn-floating activator halfway-fab waves-effect waves-light purple"><i className="material-icons">add</i></Link>
                                </div>
                                <div className="card-content">
                                    <p>New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square.
                                    </p>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">New York<i className="material-icons right">close</i></span>
                                   <p><b>Fly on a helicopter and be stunned by the view of NYC</b><br></br> Tours by helicopters are one of the most famous and fun things to do in NYC, especially for first-time visitors. It is the most thrilling way to see NYC’s top landmarks, the Hudson River and its bay. Soar high above the NYC skyline and enjoy the panorama.<br></br>
                                 <br></br><b>Explore the catacombs of the Basilica of St. Patrick’s Old Cathedral</b> <br></br> Ready for a spooky night? Go behind the scenes at the Basilica of St. Patrick’s Old Cathedral. Get access to the off-limits and hidden areas of the Basilica grounds, and step into the only active catacombs in New York City.<br></br>
                                 <br></br> <b>Balance your mind and body at Aire Ancient Baths</b> <br></br> In an industrial building from 1808, the AIRE is an experience of sensations that runs through different thermal baths, massages as well as other experiences which you will find absolutely delightful!
                                  
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <h4 className="center">
                            <span className="purple-text darken-1">ViewsN'Vibes</span> Top Tour Guides </h4>
                        <div className="col s12 m4">
                            <div className="card">
                                <div className="card-image">
                                    <img src={tourguide1} alt="" />
                                    <span className="card-title">Emily S.</span>
                                    <Link to="#" className="btn-floating activator halfway-fab waves-effect waves-light purple" href="#"><i className="material-icons">add</i></Link>
                                </div>
                                <div className="card-content">
                                    <p>Painted Ladies San Francisco City Tour <b>$75</b>
                                    </p>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">Emily S.<i className="material-icons right">close</i></span>
                                    <p> Welcome! <br></br>

                                    Let me introduce myself. My name is Emily. I am a guide and will support you during the tour. I promise you are going to enjoy your stay here in San Fran. This is a beautiful, quiet city where you can relax, sit by the beach, enjoy great meals and feel very safe. You can walk into town and enjoy the fountains or take a moonlit walk along the water. <br></br>
                                    <br></br> <b>Book Today!</b>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m4">
                            <div className="card">
                                <div className="card-image">
                                    <img src={tourguide2} alt="" />
                                    <span className="card-title">Rico M.</span>
                                    <Link to="#"  className="btn-floating activator halfway-fab waves-effect waves-light purple"><i className="material-icons">add</i></Link>
                                </div>
                                <div className="card-content">
                                    <p>Half Day Driving, Walking, History, Culture, and Architecture <b>$135</b>
                                    </p>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">Rico M.<i className="material-icons right">close</i></span>
                                    <p>Welcome! <br></br>
                                    I'm Rico, your guide for this tour. I'll tell you all about the things you will see. If you have any questions, please ask. It's my job to answer them. All my time is free to talk to you, sightseers.
                                    </p>
                                    <br></br> <b>Book Today!</b>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m4">
                            <div className="card">
                                <div className="card-image">
                                    <img src={tourguide3} alt="" />
                                    <span className="card-title">Sam T.</span>
                                    <Link to="#"  className="btn-floating activator halfway-fab waves-effect waves-light purple"><i className="material-icons">add</i></Link>
                                </div>
                                <div className="card-content">
                                    <p>New York in One Day Guided Sightseeing Tour <b>$250</b>
                                    </p>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">Sam T.<i className="material-icons right">close</i></span>
                                    <p>Welcome! <br></br>
                                    I’m your tour guide Natalja. It’s great to meet you in New York City. Discover New York and you will see it is phenomenal. Like Alice in her Wonderland, you will find there is even more to see in ny than you have dreamed about.
                                    </p>
                                    <br></br> <b>Book Today!</b>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="row">
            <div className="col s12 center">
              <a href="#contact" className="btn btn-large grey darken-3">
                <i className="material-icons left">send</i> Contact For Booking
              </a>
            </div>
          </div> */}
                </div>
            </section>
        );
    }
}

export default Popular;