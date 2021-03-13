import { gql } from "apollo-server";

export default gql`
  type Mutation {
    createAcount(
      avatar: Upload
      userName: String
      password: String!
      firstName: String!
      email: String!
    ): User
  }
`;
