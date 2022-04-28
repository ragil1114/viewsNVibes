import React, { Component } from 'react';
import '../../../../node_modules/materialize-css/dist/css/materialize.min.css';
import './Search.css';
import { GET_TOURS } from '../../utils/queries'
import Auth from '../../utils/auth'
import { useQuery } from '@apollo/client';

class Search extends Component {
  
  render() {
    const loggedIn = Auth.loggedIn();

    const { data: tourData } = useQuery(GET_TOURS);
    return (
      <section id="search" className="section section-search blue accent-2 white-text center scrollspy">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <div className="input-field">
                <input className="white grey-text autocomplete" placeholder="Search for places, hotels, ect..." type="text" id="autocomplete-input" />
              </div>
            </div>
          </div>
        </div>

        {loggedIn && tourData ? (
          <div className="col-12 col-lg-3 mb-3">
            <TourList
            tourData={tourDestination: context.tours.tourDestination}
            />
          </div>
        ) : null}
      </section>
    );
  }
}

export default Search;