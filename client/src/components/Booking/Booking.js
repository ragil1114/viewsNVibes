import React, { Component } from 'react';
import '../../../../node_modules/materialize-css/dist/css/materialize.min.css';
import './Booking.css'

class Follow extends Component {
  render() {
    return (
      <section className="section section-book orange accent-1 center">
        <div className="container">
        <div className="row">
            <div className="col s12 center">
              <a href="!#" className="btn btn-large waves-effect white blue-text text-lighten-3 ">
                <i className="material-icons left">send</i> Book Now
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Follow;