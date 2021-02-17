import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
  }),
)

export default useStyles
