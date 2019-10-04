import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  startCondition: {
    marginTop: 15,
    marginRight: 15,
  }

}));

export default useStyles;