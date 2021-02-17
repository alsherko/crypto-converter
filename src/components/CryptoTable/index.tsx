import React from 'react'

import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'

import { Coin } from '../../types'
import useStyles from './style'

type CryptoTableProps = {
  items: Coin[];
}

function CryptoTable ({items}: CryptoTableProps) {

  const classes = useStyles()

  return (
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
          {items?.map((item: Coin) => (
            <TableRow key={item.name}>
              <TableCell align="left">
                <img
                  src={item.imageUrl}
                  alt={`${item.fullName} icon`}
                  className={classes.currencyImg}
                />
              </TableCell>
              <TableCell align="left">{item.name}</TableCell>
              <TableCell align="left">{item.fullName}</TableCell>
              <TableCell align="left">{item.price}</TableCell>
              <TableCell align="left">{item.volume24Hour}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CryptoTable
