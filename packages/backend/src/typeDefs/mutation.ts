import gql from 'graphql-tag'

export default gql`
  type Mutation {
    signIn(email: String!, password: String!): signInResponse
  }
`
