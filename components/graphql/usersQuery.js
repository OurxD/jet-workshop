import { gql } from 'apollo-boost';

const postQuery = gql`
  {
    users {
      id
      name
      email
      projects {
        id
        name
      }
    }
  }
`;

export default postQuery;
