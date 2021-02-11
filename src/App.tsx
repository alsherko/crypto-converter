import React, { useEffect, useState } from 'react'
import {
  Container,
  createStyles,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Paper,
  Select,
  TextField,
  Theme,
  Typography,
} from '@material-ui/core'

import axios from 'axios'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(10),
    },
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
      textAlign: 'center',
    },
    cryptoInputBox: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 20,
      marginBottom: 20,
    },
    currencyInput: {
      minWidth: 'calc(70%-10px)',
      marginRight: 10,
    },
    currencyType: {
      minWidth: '30%',
    },
    table: {
      minWidth: 650,
    },
    currencyImg: {
      width: 18,
      height: 18,
      borderRadius: 30,
    },
  }),
)

type Coin = {
  name: string
  fullName: string
  imageUrl: string
  price: number
  volume24Hour: number
}

function App() {
  const classes = useStyles()
  const [allCoins, setAllCoins] = useState<Coin[]>([])

  useEffect(() => {
    ;(async () => {
      const response = await axios.get(
        'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD',
      )
      const coins: Coin[] = response?.data?.Data.map((coin: any) => ({
        name: coin.CoinInfo.Name,
        fullName: coin.CoinInfo.FullName,
        imageUrl: `https://cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
        price: coin.RAW.USD.PRICE.toFixed(3),
        volume24Hour: parseInt(coin.RAW.USD.VOLUME24HOUR),
      }))
      setAllCoins(coins)
    })()
  }, [])
  return (
    <Container className={classes.root} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="left">Full Name</TableCell>
                  <TableCell align="left">Price</TableCell>
                  <TableCell align="left">volume24Hour</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allCoins?.map((coins) => (
                  <TableRow key={coins.name}>
                    <TableCell align="left">
                      <img
                        src={coins.imageUrl}
                        alt={`${coins.fullName} icon`}
                        className={classes.currencyImg}
                      />
                    </TableCell>
                    <TableCell align="left">{coins.name}</TableCell>
                    <TableCell align="left">{coins.fullName}</TableCell>
                    <TableCell align="left">{coins.price}</TableCell>
                    <TableCell align="left">{coins.volume24Hour}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={4}>
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
            <div className={classes.cryptoInputBox}>
              <FormControl fullWidth className={classes.currencyInput}>
                <TextField label="Amount" />
              </FormControl>
              <FormControl className={classes.currencyType}>
                <InputLabel>Currency</InputLabel>
                <Select value={10}>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={11}>Eleven</MenuItem>
                </Select>
              </FormControl>
            </div>
            <Typography variant="h5" component="h5">
              h5. Heading
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
