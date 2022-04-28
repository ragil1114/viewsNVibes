import React, { Component } from 'react';
import '../../../../node_modules/materialize-css/dist/css/materialize.min.css';


class Explore extends Component {
  render() {
    return (
      <section id="explore" className="section section-icons grey lighten-4 center">
        <div className="container">
          <div className="row">
          <h4 className="center">
              <span className="blue-text text-lighten-3">Explore</span> with ViewsN'Vibes</h4>
            <div className="col s6 m3">
              <div className="card-panel">
                <i className="material-icons medium blue-text text-lighten-3">hotel</i>
                <h4>Hotels</h4>
                <p>Stay in luxurious hotels, with remarkable views of the city</p>
              </div>
            </div>
            <div className="col s6 m3">
              <div className="card-panel">
                <i className="material-icons medium blue-text text-lighten-3">restaurant</i>
                <h4>Food</h4>
                <p>Dine at the top restaurants in whichever city you're visiting</p>
              </div>
            </div>
            <div className="col s6 m3">
              <div className="card-panel">
                <i className="material-icons medium medium blue-text text-lighten-3">local_cafe</i>
                <h4>Coffee</h4>
                <p>Explore quaint coffee shops, and try a new bakery items</p>
              </div>
            </div>
            <div className="col s6 m3">
              <div className="card-panel">
                <i className="material-icons medium medium blue-text text-lighten-3">shopping_basket</i>
                <h4>Shop</h4>
                <p>Discover new boutiques and enjoy a mall in a new city..</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Explore;