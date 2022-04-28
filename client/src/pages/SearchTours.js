import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';

// import Auth from '../utils/auth';

 // ADDED
import { useMutation } from '@apollo/client';
import { SAVE_TOUR } from '../utils/mutations';
import { response } from 'express';
// import { async } from 'regenerator-runtime';

const SearchTours = () => {
 // CREATE STATE FOR HOLDING RETURNED GRAPHQL QUERY
  const [searchedTours, setSearchedTour] = useState([]);

  // CREATE STATE FOR HOLDING OUR SEARCH FIELD DATA
  const [searchInput, setSearchInput] = useState('');

  // CREATE STATE TO HOLD SAVED TOURID VALUES
  const [savedTourIds, setSavedTourIds] = useState(getSavedTourIds());

  useEffect(() => {
      return () => savedTourIds(savedTourIds);
  });

  const [saveTour, { error }] = useMutation(SAVE_TOUR);

  const limit = 6;
  const query = `
  {
    tours {
        _id
        tourId
        tourGuide
        tourDestination
        tourName
        image
        description
    }
  }
  `

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

      const tourData = items.map((tours) => ({
        bookId: tours._id,
        tourGuide: tours.tourGuide,
        tourDestination: tours.tourDestination,
        tourName: tours.tourName,
        description: tours.description,
        image: tours.image,
        
      }));

      setSearchedTour(tourData);
      setSearchInput('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
      <>
        <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Search for Tours!</h1>
          <Form onSubmit={handleFormSubmit}>
            <Form.Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name='searchInput'
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type='text'
                  size='lg'
                  placeholder='Search for a tour'
                />
              </Col>
              <Col xs={12} md={4}>
                <Button type='submit' variant='success' size='lg'>
                  Submit Search
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Container>
      </Jumbotron>
      </>
  )
}
export default SearchTours;