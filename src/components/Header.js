import React from 'react'
import {
  Toolbar,
  Divider,
  IconButton,
  Typography,
  Badge,
  makeStyles,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import SideDrawer from './SideDrawer'
import NotificationsIcon from '@material-ui/icons/Notifications'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  tagline: {
    fontSize: '1.5rem',
    justifyContent: 'center',
    textTransform: 'uppercase',
    fontWeight: 100,
    fontFamily: 'Montserrat',
    margin: '0.5em 0',
  },
}))

const Header = () => {
  const classes = useStyles()

  return (
    <>
      <Toolbar>
        <SideDrawer>
          <IconButton color='inherit'>
            <MenuIcon />
          </IconButton>
        </SideDrawer>
        <Typography variant='h6' className={classes.title}>
          Blogging website
        </Typography>
        <IconButton color='inherit'>
          <Badge badgeContent={44} color='primary'>
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton color='inherit'>
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <Toolbar className={classes.tagline}>
        Express your emotions trough words
      </Toolbar>
    </>
  )
}

export default Header
