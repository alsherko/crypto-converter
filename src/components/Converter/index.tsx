import React from 'react'

import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Paper from '@material-ui/core/Paper'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

import useStyles from './style'

function Converter() {
  const classes = useStyles()

  return (
    <Paper className={classes.paper}>
      <div className={classes.cryptoInputBox}>
        <FormControl fullWidth className={classes.currencyInput}>
          <TextField label="Сумма" />
        </FormControl>
        <FormControl className={classes.currencyType}>
          <InputLabel>Валюта</InputLabel>
          <Select value={10}>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={10}>Eleven</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Typography variant="h5" component="h5">
        h5. Heading
      </Typography>
    </Paper>
  )
}

export default Converter
