import {createStyles, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
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

export default useStyles;