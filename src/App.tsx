import React from 'react'
import {
  Container,
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Theme,
} from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(10),
    },
    paper: {
      padding: theme.spacing(2),
    },
  }),
)

function App() {
  const classes = useStyles()

  return (
    <Container className={classes.root} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Paper className={classes.paper}></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}></Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
