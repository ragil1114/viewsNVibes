import { gql } from '@apollo/client';
export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        savedTours {
            tourId
            tourDestination
            tourGuide
            description
            tourName
            image
        }
      }
    }
  }
`;
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        tourCount
        savedTours {
            tourId
            tourGuide
            tourDestination
            tourName
            image
            description
        }
      }
    }
  }
`;
// change to Save tour
export const SAVE_TOUR = gql`
  mutation saveTour($tourId: String!, $tourGuide: [String]!, $tourDestination: String!, $tourName: String!, $image: String!, $description: String!) 
  {
    saveTour(tourId: $tourId, tourGuide: $tourGuide, tourDestination: $tourDestination, tourName: $tourName, image: $image, description: $description)
     {
        _id
        username
        email
        tourCount
        savedTours
        {
            tourId
            tourGuide
            tourDestination
            tourName
            image
            description
        }
    }
  }
`;
// change to Remove tour
export const REMOVE_TOUR = gql`
  mutation removeTour($tourId: String!)
    {
    removetour(tourId: $tourId)
     {
        _id
        username
        email
        tourCount
        savedTours
        {
            tourId
            tourGuide
            tourDestination
            tourName
            image
            description
        }
    }
  }
`;