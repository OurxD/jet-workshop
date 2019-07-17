import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const User = ({
  id,
  name,
}) => (
  <Grid item xs={4}>
    <Card>
      <CardHeader
        title={(
          <Typography variant="body2" align="center">
            {name}
          </Typography>
        )}
        subheader={(
          <Typography variant="caption" href="#" align="center" component="a" display="block">
            Go To Project!
          </Typography>
        )}
      />
    </Card>
  </Grid>
);

export default User;
