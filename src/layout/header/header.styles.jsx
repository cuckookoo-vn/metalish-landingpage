import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.default,
    ['@media (max-width:780px)']: {},
  },
}));
