import React, {useEffect, useState} from 'react'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import {Converter, CryptoTable} from "./components";
import useStyles from "./style";
import axios from "axios";
import {Coin} from "./types";

function App() {
  const classes = useStyles();

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
          <CryptoTable items={allCoins}/>
        </Grid>
        <Grid item xs={4}>
          <Converter />
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
