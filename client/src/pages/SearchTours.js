import React, { useState, useEffect } from 'react';
// import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';

// import Auth from '../utils/auth';

//added
import { useMutation } from '@apollo/client';
import { SAVE_TOUR } from '../utils/mutations';

const SearchTours = () => {
 // CREATE STATE FOR HOLDING RETURNED GRAPHQL QUERY
  const [searchedTours, setSearchBooks] = useState([]);

  // CREATE STATE FOR HOLDING OUR SEARCH FIELD DATA
  const [searchInput, setsearchInput] = useState('');

  // CREATE STATE TO HOLD SAVED BOOKID VALUES
  const [savedTourIds, setSavedTourIds] = useState(getSavedTourIds());
}


export default SearchTours