import React from 'react';
import Grid from '@material-ui/core/Grid';
import User from './User';

const Users = ({ users }) => (
  <Grid
    container
    direction="column"
    justify="flex-start"
    spacing={2}
    wrap="nowrap"
  >
    {users.map(({
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
      />
    ))}
  </Grid>
);

export default Users;
