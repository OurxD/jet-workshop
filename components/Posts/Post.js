import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
  avatar: {
    backgroundColor: red[500],
  },
  favorited: {
    color: red[500],
  },
  cardActions: {
    flexDirection: 'row-reverse',
  },
}));

const Post = ({
  title,
  description,
  favorite,
  index,
  dispatch,
}) => {
  const classes = useStyles();

  return (
    <Grid item>
      <Card>
        <CardHeader
          avatar={(
            <Avatar aria-label="Recipe" className={classes.avatar}>
              {index + 1}
            </Avatar>
          )}
          title={title}
          subheader="author name goes here"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions
          className={classes.cardActions}
          disableSpacing
        >
          <IconButton
            aria-label="Add to favorites"
            onClick={() => dispatch({
              type: 'toggleFavorite',
              index,
            })}
          >
            <FavoriteIcon className={favorite ? classes.favorited : ''} />
          </IconButton>
          <IconButton
            aria-label="Add to favorites"
            onClick={() => dispatch({
              type: 'delete',
              index,
            })}
          >
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Post;
