import React from 'react';
import Typography from '@material-ui/core/Typography';
import Users from '../components/Users';

const HEADING_LABEL = 'Users 👤';

const PostsPage = () => (
  <>
    <Typography variant="h2" color="inherit">
      {HEADING_LABEL}
    </Typography>
    <Users />
  </>
);

export default PostsPage;
