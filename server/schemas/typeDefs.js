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
    saveTour(tourId: String!, tourGuide: String!, tourDestination: String!, tourName: String!, image: String, description: String): User
    removeTour(tourId: String!): User
}
`;

// export the typeDefs
module.exports = typeDefs;