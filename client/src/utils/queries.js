import { gql } from '@apollo/client';

export const GET_ME = gql` 
  {
    me {
      _id
      username
      email
      tourCount
      savedTours {
            _id
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
export const GET_TOURS = gql` 
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
`;