const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
type Tours {
    tourId: String
    tourDestination: String
    tourGuide: String
    description: String
    tourName: String
    image: String
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
}
type Mutation {
    loginUser(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveTour(tourGuide: String, tourDestination: String!, description: String, title: String, tourId: String!, image: String): User
    removeTour(tourId: String!): User
}
`;

// export the typeDefs
module.exports = typeDefs;