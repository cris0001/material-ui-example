import React from 'react'
import { Typography, Grid, Divider } from '@material-ui/core'
import { posts } from '../data'
import Markdown from 'markdown-to-jsx'

const Main = () => {
  return (
    <>
      <Grid item xs={12} md={8}>
        <Typography variant='h6' gutterBottom>
          From the Firehose
        </Typography>
        <Divider />
        {posts.map((post, index) => {
          return <Markdown key={index}>{post.body}</Markdown>
        })}
      </Grid>
    </>
  )
}

export default Main
