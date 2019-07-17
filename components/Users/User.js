import React, { useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red, yellow } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import Grid from '@material-ui/core/Grid';
import Projects from './Projects';

const useStyles = makeStyles(() => ({
  avatar: {
    backgroundColor: yellow[300],
    color: red[300],
  },
  favorited: {
    color: red[500],
  },
  cardActions: {
    flexDirection: 'row-reverse',
  },
}));

const User = ({
  name,
  email,
  projects,
  id,
  favorite,
  // dispatch,
}) => {
  const classes = useStyles();
  // const toggleFavorite = useCallback(
  //   () => dispatch({
  //     type: 'toggleFavorite',
  //     id,
  //   }),
  //   [],
  // );
  // const deletePost = useCallback(
  //   () => dispatch({
  //     type: 'delete',
  //     id,
  //   }),
  //   [],
  // );

  return (
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
        {/* <CardActions
          className={classes.cardActions}
          disableSpacing
        >
          <IconButton
            aria-label="Add to favorites"
            // onClick={toggleFavorite}
          >
            <FavoriteIcon className={favorite ? classes.favorited : ''} />
          </IconButton>
          <IconButton
            aria-label="Delete"
            // onClick={deletePost}
          >
            <DeleteIcon />
          </IconButton>
        </CardActions> */}
      </Card>
    </Grid>
  );
};

export default User;
