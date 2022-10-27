import Grid from '@mui/material/Unstable_Grid2';
import React from 'react';
import { useStyles } from './header.styles';

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      Header
      {/* <Grid container>
        <Grid xs={6}>
          <Grid container>Logo</Grid>
        </Grid>
        <Grid xs={6}>
          <Grid container justifyContent='flex-end' spacing={3}>
            <Grid item>Language</Grid>
            <Grid item>Download</Grid>
          </Grid>
        </Grid>
      </Grid> */}
    </div>
  );
};

export default Header;
