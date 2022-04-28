import React, { Component } from 'react';
import '../../../../node_modules/materialize-css/dist/css/materialize.min.css';
const FORM_ENDPOINT = "https://public.herotofu.com/v1/436203a0-c66b-11ec-a557-034a17e2da28";
class Contact extends Component {
    render() {
        return (
            
            <section id="contact" className="section section-contact scrollspy">
                <div className="container">
                    <div className="row">
                        <div className="col s12 m6">
                            <div className="card-panel orange accent-1 white-text center">
                                <i className="material-icons medium">email</i>
                                <h5>ViewsN'Vibes Address</h5>
                                <p>Contact us with any questions or concerns you may have!</p>
                            </div>
                            <ul className="collection with-header">
                                <li className="collection-header">
                                    <h4>Main Office</h4>
                                </li>
                                <li className="collection-item">ViewsN'Vibes Booking</li>
                                <li className="collection-item"><i className="fas fa-map-marker-alt"></i> 123 Booking road, Texas, US</li>
                                <li className="collection-item"><i className="fas fa-phone"></i> (800) 123-4567</li>
                                <li className="collection-item"><i className="fas fa-envelope-square"></i> viewsnvibesOfficial@gmail.com</li>
                            </ul>
                        </div>
                        <div className="col s12 m6">
                            <div className="card-panel grey lighten-3 center">
                                <h5>Get in Touch</h5>
                                <form>
                                    <div className="input-field">
                                        <input type="text" id="name" className="validate" />
                                        <label htmlFor="name" className="orange-text text-accent-1">Name</label>
                                    </div>
                                    <div className="input-field">
                                        <input type="email" id="email" />
                                        <label htmlFor="email" className="orange-text text-accent-1">Email</label>
                                    </div>
                                    <div className="input-field">
                                        <input type="text" id="phone" />
                                        <label htmlFor="phone" className="orange-text text-accent-1">Phone</label>
                                    </div>
                                    <div className="input-field">
                                        <textarea className="materialize-textarea" id="message" data-length="120"></textarea>
                                        <label htmlFor="message" className="orange-text text-accent-1">Message</label>
                                    </div>
                                    <input type="submit" value="Submit" className="btn orange accent-1" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
    

            </section>
        );
    }
}

export default Contact;