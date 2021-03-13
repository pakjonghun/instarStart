import { gql } from "apollo-server-core";

export default gql`
  type creatUserResult {
    ok: Boolean!
    error: String
    data: User
  }
  type Query {
    createUser(
      userName: String!
      firstName: String!
      email: String
      avatar: Upload
      bio: String
      password: String!
    ): creatUserResult
  }
`;
