import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap'; 
import AnchorLink from 'react-anchor-link-smooth-scroll';

import Auth from '../utils/auth';
import { saveTourIds, getSavedTourIds } from '../utils/localStorage';
import '../../../../node_modules/materialize-css/dist/css/materialize.min.css';


import { GET_TOURS } from '../utils/queries';

//added
import { useMutation, useQuery } from '@apollo/client';
import { SAVE_TOUR } from '../utils/mutations';
// import { saveTour } from '../../../server/controllers/user-controller';

const SearchTours = () => {
    // create state for holding returned tour data from query
    const [searchedTours, setSearchedTours] = useState([]);
    // create state for holding our search field data
    const [searchInput, setSearchInput] = useState('');

    // create state to hold saved tourId values
    const [savedTourIds, setSavedTourIds] = useState(getSavedTourIds());

    // set up useEffect hook to save `savedTourIds` list to localStorage on component unmount
    useEffect(() => {
        return () => saveTourIds(savedTourIds);
    });

    const [saveTour, { error }] = useMutation(SAVE_TOUR);
    const  {getTours}  = useQuery(GET_TOURS);

    // create method to search for tours and set state on form submit
    const handleSeekTours = async (event) => {
        event.preventDefault();
        console.log("This is seach input: ", searchInput) // This is working.
        if (!searchInput) {
            return false;
        }
        
        try {
            // THE QUERY BELOW IS NOT WORKING.  ERROR SAYS: "getTours is not a function at handleSeekTours"
            const tourDetails  = await getTours(searchInput);
            if (!tourDetails) {
                throw new Error('something went wrong!');
            }

            // const { items } = await response.json();

            const tourData = tourDetails.map((tour) => ({
                tourId: tour.tourId,
                tourGuide: tour.tourGuide,
                tourDestination: tour.tourDestination,
                tourName: tour.tourName,
                description: tour.description,
                image: tour.image,
            }));

            setSearchedTours(tourData);
            setSearchInput('');
        } catch (err) {
            console.error(err);
        }
    };

    // create function to handle saving a tour to our database
    const handleSaveTour = async (tourId) => {
        // find the tour in `searchedTours` state by the matching id
        const tourToSave = searchedTours.find((tour) => tour.tourId === tourId);

        // get token
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            const updatedUser = await saveTour({ variables: { ...tourToSave } });

            if (!updatedUser) {
                throw new Error('something went wrong!');
            }

            // if tour successfully saves to user's account, save tour id to state
            setSavedTourIds([...savedTourIds, tourToSave.tourId]);
            saveTourIds(saveTourIds);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
           {/* <Jumbotron fluid className='text-light bg-dark'> */}
                <Container>
                    <h1>Search for Tours!</h1>
                    <Form onSubmit={handleSeekTours}>
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
                            <Col xs={12} md={4}> <br></br>
                            <AnchorLink href="#search" className="btn btn-large blue lighten-3">Search</AnchorLink>
                               
                            </Col>
                        </Form.Row>
                    </Form>
                </Container>
            {/* </Jumbotron> */}

            <Container>
                <h2>
                    {searchedTours.length
                        ? `Viewing ${searchedTours.length} results:`
                        : 'Search for a tour to begin'}
                </h2>
                <CardColumns>
                    {searchedTours.map((tour) => {
                        return (
                            <Card key={tour.tourId} border='dark'>
                                {tour.image ? (
                                    <Card.Img src={tour.image} alt={`${tour.tourName}`} variant='top' />
                                ) : null}
                                <Card.Body>
                                    <Card.Title>{tour.tourName}</Card.Title>
                                    <p className='small'>Tour Guide: {tour.tourGuide}</p>
                                    <Card.Text>{tour.description}</Card.Text>
                                    {Auth.loggedIn() && (
                                        <Button
                                            disabled={savedTourIds?.some((savedTourId) => savedTourId === tour.tourId)}
                                            className='btn-block btn-info'
                                            onClick={() => handleSaveTour(tour.TourId)}>
                                            {savedTourIds?.some((savedTourId) => savedTourId === tour.tourId)
                                                ? 'This tour has already been saved!'
                                                : 'Book this Tour!'}
                                        </Button>
                                    )}
                                </Card.Body>
                            </Card>
                        );
                    })}
                </CardColumns>
            </Container>
        </>
    );
};

export default SearchTours;
