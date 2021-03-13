import { gql } from "apollo-server-core";

export default gql`
  type User {
    id: Int!
    firstName: String!
    userName: String!
    email: String!
    bio: String
    avatar: String
    following: [User]
    follower: [User]
  }

  type Query {
    user: User
  }
`;
