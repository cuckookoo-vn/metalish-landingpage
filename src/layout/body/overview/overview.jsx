import styled from '@emotion/styled';
import { Box, Paper } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import React from 'react';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Overview = () => {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={6}>
          <Item>xs=8</Item>
        </Grid>
        <Grid xs={6}>
          <Item>xs=4</Item>
        </Grid>
      </Grid>
    </Box>
      {/* Overview
      <Grid container spacing={3}>
        <Grid xs={6}>Description</Grid>
        <Grid xs={6}>Image</Grid>
      </Grid> */}
    </>
  );
};

export default Overview;
