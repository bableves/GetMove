import React from 'react';
import { Button, Grid } from '@material-ui/core';
import cf from '../../assets/asd.jpg';
import { makeStyles } from '@material-ui/core/styles';
import HeaderText from './HeaderText';

const useStyles = makeStyles((theme) => ({
  GridContainer: {
    minHeight: '95vh',
    background: 'url(' + cf + ') no-repeat center',
    paddingTop: '5%',
    paddingLeft: '20%',
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      className={classes.GridContainer}
    >
      <Grid item>
        <HeaderText />
      </Grid>
      <Grid item>
        <Button color="primary" variant="contained">
          Regisztrálok
        </Button>
      </Grid>
      <Grid item>
        <Button variant="outlined">Bejelentkezés</Button>
      </Grid>
    </Grid>
  );
};

export default Home;
