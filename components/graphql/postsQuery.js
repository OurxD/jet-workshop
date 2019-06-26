import { gql } from 'apollo-boost';

const postQuery = gql`
  {
    posts {
      title
      description
      favorite
    }
  }
`;

export default postQuery;
