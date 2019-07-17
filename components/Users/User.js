import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Projects from './Projects';

const User = ({
  name,
  email,
  projects,
}) => (
  <Grid item>
    <Card>
      <CardHeader
        title={name}
        subheader={`<${email}>`}
      />
      {!!projects.length && (
        <CardContent>
          <Projects projects={projects} />
        </CardContent>
      )}
    </Card>
  </Grid>
);

export default User;
