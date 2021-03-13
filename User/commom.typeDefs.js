import { gql } from "apollo-server-core";

export default gql`
  type User {
    id: Int!
  }

  type Query {
    user: User
  }
`;
