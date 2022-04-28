import React from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';

import { GET_ME } from '../utils/queries';
import Auth from '../utils/auth';
import { REMOVE_TOUR } from '../utils/mutations';
import { removeTourId } from '../utils/localStorage';
import { useQuery, useMutation } from '@apollo/client';

const SavedTours = () => {

  const { data, loading } = useQuery(GET_ME);

  const [removeTour, { error }] = useMutation(REMOVE_TOUR);

  const userData = data?.me || {};

  const handleDeleteTour = async (tourId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const incomingData = await removeTour({ variables: { tourId: tourId } });
console.log ("This is the incoming data: ", incomingData, "this is the tourID: ", tourId);
      removeTourId(tourId);
    } catch (err) {
      console.log(err);
    }

  };

// if data isn't here yet, say so
if (loading) {
  return <h2>LOADING...</h2>;
}

return (
  <>
    <Jumbotron fluid className='text-light bg-dark'>
      <Container>
        <h1>Viewing saved tours!</h1>
      </Container>
    </Jumbotron>
    <Container>
      <h2>
        {userData.savedTours.length
          ? `Viewing ${userData.savedTours.length} saved ${userData.savedTours.length === 1 ? 'tour' : 'tours'}:`
          : 'You have no saved tours!'}
      </h2>
      <CardColumns>
        {userData.savedTours.map((tour) => {
          return (
            <Card key={tour.tourId} border='dark'>
              {tour.image ? <Card.Img src={tour.image} alt={`The tour ${tour.tourName}`} variant='top' /> : null}
              <Card.Body>
                <Card.Title>{tour.tourName}</Card.Title>
                <p className='small'>Guide: {tour.tourGuide}</p>
                <Card.Text>{tour.description}</Card.Text>
                <Button className='btn-block btn-danger' onClick={() => handleDeleteTour(tour.tourId)}>
                  Delete this Tour!
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </CardColumns>
    </Container>
  </>
);
};

export default SavedTours;