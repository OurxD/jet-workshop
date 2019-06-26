import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { gql } from 'apollo-boost';
import client from '../apollo/client';

const BUTTON_LABEL = 'click me 💘';
const HEADING_LABEL = 'oliwi amix 🌝';
const onClick = () => console.log('well hello there 👀');

const Home = () => (
  <>
    <Typography variant="h2" color="inherit">
      {HEADING_LABEL}
    </Typography>
    <Button
      variant="contained"
      color="primary"
      onClick={onClick}
    >
      {BUTTON_LABEL}
    </Button>
  </>
);

export default Home;
