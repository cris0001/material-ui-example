import React from 'react'
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  makeStyles,
} from '@material-ui/core'

const useStyles = makeStyles({
  title: {
    fontSize: '2.5rem',
    marginBottom: '1em',
    fontFamily: 'Montserrat',
    fontWeight: 100,
  },
  cover: {
    backgroundImage: `url(https://images.unsplash.com/photo-1489846986031-7cea03ab8fd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1952&q=80)`,
    backgroundPosition: 'center',
    padding: '3em 2em',
  },
  textContainer: {
    color: 'white',
  },
  subtitle: {
    fontFamily: 'Montserrat',
    fontWeight: 300,
  },
})

const FeaturedPost = () => {
  const classes = useStyles()

  return (
    <Card className={classes.cover}>
      <CardContent className={classes.textContainer}>
        <Typography className={classes.title}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          recusandae?
        </Typography>
        <Typography variant='h5' className={classes.subtitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          obcaecati id magni velit quas modi, reiciendis repudiandae! Veritatis,
          dignissimos magni!
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='text' style={{ color: '#90caf9', fontWeight: 700 }}>
          read more
        </Button>
      </CardActions>
    </Card>
  )
}

export default FeaturedPost
