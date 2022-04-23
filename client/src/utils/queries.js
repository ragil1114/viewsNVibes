import { gql } from '@apollo/client';

export const GET_ME = gql` 
  {
    me {
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
`;
export const GET_TOURS = gql` 
  {
    tours {
        tourId
        tourGuide
        tourDestination
        tourName
        image
        description
    }
  }
`;