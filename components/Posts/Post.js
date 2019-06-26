import React from 'react';
// import Typography from '@material-ui/core/Typography';
//
import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
  card: {
    // maxWidth: 345,
  },
  // media: {
  //   height: 0,
  //   paddingTop: '56.25%', // 16:9
  // },
  // expand: {
  //   transform: 'rotate(0deg)',
  //   marginLeft: 'auto',
  //   transition: theme.transitions.create('transform', {
  //     duration: theme.transitions.duration.shortest,
  //   }),
  // },
  // expandOpen: {
  //   transform: 'rotate(180deg)',
  // },
  avatar: {
    backgroundColor: red[500],
  },
  favorited: {
    color: red[500],
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
      <Card className={classes.card}>
        <CardHeader
          avatar={(
            <Avatar aria-label="Recipe" className={classes.avatar}>
              {index + 1}
            </Avatar>
          )}
          action={(
            <>
              <IconButton
                aria-label="Add to favorites"
                onClick={() => dispatch({
                  type: 'delete',
                  index,
                })}
              >
                <DeleteIcon />
              </IconButton>
              <IconButton
                aria-label="Add to favorites"
                onClick={() => dispatch({
                  type: 'toggleFavorite',
                  index,
                })}
              >
                <FavoriteIcon className={favorite ? classes.favorited : ''} />
              </IconButton>
            </>
          )}
          title={title}
          subheader="author name goes here"
        />
        {/* <CardMedia
          className={classes.media}
          image="/static/images/cards/paella.jpg"
          title="Paella dish"
        /> */}
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        {/* <CardActions disableSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon className={favorite ? classes.favorited : ''} />
          </IconButton>
        </CardActions> */}
      </Card>
    </Grid>
  );
};

export default Post;
