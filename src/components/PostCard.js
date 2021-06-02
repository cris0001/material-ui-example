import React from 'react'
import {
  Grid,
  makeStyles,
  CardActionArea,
  Card,
  Typography,
  CardContent,
  Hidden,
  CardMedia,
} from '@material-ui/core'

const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
})

const PostCard = ({ post }) => {
  const classes = useStyles()
  return (
    <Grid item xd={12} md={6}>
      <CardActionArea component='a' href='#'>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component='h2' variant='h5'>
                {post.title}
              </Typography>
              <Typography variant='subtitle1' color='textSecondary'>
                {post.date}
              </Typography>
              <Typography variant='subtitle1' paragraph>
                {post.description}
              </Typography>
              <Typography variant='subtitle1' style={{ color: 'skyblue' }}>
                Continue reading...
              </Typography>
            </CardContent>
          </div>

          <Hidden xsDown>
            <CardMedia
              className={classes.cardMedia}
              image={post.image}
              title={post.imageTitle}
            ></CardMedia>
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  )
}

export default PostCard
