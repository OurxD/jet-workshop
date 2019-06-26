import React, { useReducer } from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import postsQuery from '../graphql/postsQuery';
import useQuery from '../hooks/useQuery';
import Loading from '../Loading';
import Post from './Post';

const postsReducer = (posts, action) => {
  switch (action.type) {
    case 'toggleFavorite':
      return posts.map((post) => {
        if (post.id !== action.id) {
          return post;
        }

        return {
          ...post,
          favorite: !post.favorite,
        };
      });
    case 'delete':
      return posts.filter(post => post.id !== action.id);
    default:
      throw new Error();
  }
};
const ERROR = '💀';
const Posts = () => {
  const {
    data,
    loading,
    error,
  } = useQuery(postsQuery);
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
      alignItems="flex-start"
      spacing={2}
      wrap="nowrap"
    >
      {data.posts.map(({
        title,
        description,
        favorite,
        id,
      }) => (
        <Post
          key={id}
          id={id}
          title={title}
          description={description}
          favorite={favorite}
          // dispatch={dispatch}
        />
      ))}
    </Grid>
  );
};

export default Posts;
