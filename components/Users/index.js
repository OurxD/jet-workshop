import React, { useReducer } from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import userQuery from '../graphql/usersQuery';
import useQuery from '../hooks/useQuery';
import Loading from '../Loading';
import User from './User';

// const postsReducer = (posts, action) => {
//   switch (action.type) {
//     case 'toggleFavorite':
//       return posts.map((post) => {
//         if (post.id !== action.id) {
//           return post;
//         }

//         return {
//           ...post,
//           favorite: !post.favorite,
//         };
//       });
//     case 'delete':
//       return posts.filter(post => post.id !== action.id);
//     default:
//       throw new Error();
//   }
// };
const ERROR = 'rip query 💀';
const Users = () => {
  const {
    data,
    loading,
    error,
  } = useQuery(userQuery);
  // const [postsData, dispatch] = useReducer(postsReducer, POSTS_INFO);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <h1>{ERROR}</h1>;
  }

  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      // alignItems="flex-start"
      spacing={2}
      wrap="nowrap"
    >
      {data.users.map(({
        name,
        email,
        projects,
        id,
      }) => (
        <User
          key={id}
          id={id}
          name={name}
          email={email}
          projects={projects}
          // dispatch={dispatch}
        />
      ))}
    </Grid>
  );
};

export default Users;
