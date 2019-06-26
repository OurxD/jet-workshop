import React from 'react';
import Typography from '@material-ui/core/Typography';
import Posts from '../components/Posts';

const HEADING_LABEL = 'Posts 📒';

const PostsPage = () => (
  <>
    <Typography variant="h2" color="inherit">
      {HEADING_LABEL}
    </Typography>
    <Posts />
  </>
);

export default PostsPage;
