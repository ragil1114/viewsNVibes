const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
type Tours {
    _id: ID
    tourId: String
    tourGuide: String
    tourDestination: String
    tourName: String
    image: String
    description: String  
}
type User {
    _id: ID
    username: String
    email: String
    tourCount: Int
    savedTours: [Tours]
}
type Auth {
    token: ID!
    user: User
  }

type Query {
    me: User
    tours: [Tours]
}
type Mutation {
    loginUser(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addTour(tourId: String!, tourGuide: String!, tourDestination: String!, tourName: String!, image: String, description: String!): Tours
    saveTour(tourId: String!, tourGuide: String!, tourDestination: String!, tourName: String!, image: String, description: String): User
    removeTour(tourId: String!): User
}
`;

// export the typeDefs
module.exports = typeDefs;