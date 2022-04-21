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