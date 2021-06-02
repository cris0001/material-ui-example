import './App.css'
import {
  Container,
  createMuiTheme,
  ThemeProvider,
  Grid,
  makeStyles,
} from '@material-ui/core'
import Header from './components/Header'
import PostCard from './components/PostCard'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Footer from './components/Footer'
import FeaturedPost from './components/FeaturedPost'
import { featuredPosts, sidebar } from './data'

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}))

function App() {
  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  })
  const classes = useStyles()
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Header />
        <FeaturedPost />
        <br />
        <Grid container spacing={5}>
          {featuredPosts.map((post, index) => {
            return <PostCard post={post} key={index} />
          })}
        </Grid>
        <Grid container spacing={5} className={classes.mainGrid}>
          <Main />
          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
          />
        </Grid>
      </Container>
      <Footer />
    </ThemeProvider>
  )
}

export default App
