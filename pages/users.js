import React from 'react';
import Typography from '@material-ui/core/Typography';
import Users from '../components/Users';
import userQuery from '../components/graphql/usersQuery';
import { runQuery } from '../components/hooks/useQuery';

const HEADING_LABEL = 'Users 👤';

const UsersPage = ({ users }) => (
  <>
    <Typography variant="h2" color="inherit">
      {HEADING_LABEL}
    </Typography>
    <Users users={users} />
  </>
);

UsersPage.getInitialProps = async () => {
  const { data } = await runQuery(userQuery);

  return {
    users: data.users || [],
  };
};

export default UsersPage;
