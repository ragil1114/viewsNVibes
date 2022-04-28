import React, { useState, useEffect } from 'react';
// import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';

// import Auth from '../utils/auth';

 // ADDED
import { useMutation } from '@apollo/client';
import { SAVE_TOUR } from '../utils/mutations';
import { response } from 'express';
// import { async } from 'regenerator-runtime';

const SearchTours = () => {
 // CREATE STATE FOR HOLDING RETURNED GRAPHQL QUERY
  const [searchedTours, setSearchTour] = useState([]);

  // CREATE STATE FOR HOLDING OUR SEARCH FIELD DATA
  const [searchInput, setsearchInput] = useState('');

  // CREATE STATE TO HOLD SAVED TOURID VALUES
  const [savedTourIds, setSavedTourIds] = useState(getSavedTourIds());

  useEffect(() => {
      return () => savedTourIds(savedTourIds);
  });

  const [saveTour, { error }] = useMutation(SAVE_TOUR);

  // CREATE METHOD TO SEARCH FOR TOURS AND SET STATE ON FORM SUBMIT
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await fetch('/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          query,
          variables: { limit },
        })
      })
        .then(r => r.json())
        .then(data => console.log('data returned:', data));

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { items } = await response.json();

      const bookData = items.map((book) => ({
        bookId: book.id,
        authors: book.volumeInfo.authors || ['No author to display'],
        title: book.volumeInfo.title,
        description: book.volumeInfo.description,
        image: book.volumeInfo.imageLinks?.thumbnail || '',
        link: book.volumeInfo.infoLink
      }));

      setSearchedBooks(bookData);
      setSearchInput('');
    } catch (err) {
      console.error(err);
    }
  };

}
export default SearchTours;