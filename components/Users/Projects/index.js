import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Project from './Project';

const Projects = ({
  projects
}) => (
  <>
    <Typography variant="body1" color="inherit">
      Projects
    </Typography>
    <Grid
      container
      direction="column"
      justify="flex-start"
      spacing={2}
      wrap="nowrap"
    >
      {projects.map(({
        name,
        id,
      }) => (
        <Project
          key={id}
          id={id}
          name={name}
        />
      ))}
    </Grid>
  </>
);

export default Projects;
