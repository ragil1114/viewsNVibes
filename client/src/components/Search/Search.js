import React, { Component } from 'react';
import '../../../../node_modules/materialize-css/dist/css/materialize.min.css';
import './Search.css';
import SearchTours from '../../pages/SearchTours';
import SavedTours from '../../pages/SavedTours';

class Search extends Component {
  render() {
    return (
      <section id="search" className="section section-search orange accent-1 white-text center scrollspy">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <div className="input-field">
                {/* <input className="white grey-text autocomplete" placeholder="Search for places, hotels, ect..." type="text" id="autocomplete-input" /> */}
                <SearchTours /> 
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Search;