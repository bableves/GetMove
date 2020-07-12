import React from 'react';
import { Button, Grid } from '@material-ui/core';
import db from '../../assets/db.jpg';
import { makeStyles } from '@material-ui/core/styles';
import HeaderText from './HeaderText';

const useStyles = makeStyles((theme) => ({
  GridContainer: {
    minHeight: '95vh',
    background: 'url(' + db + ') no-repeat center',
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      alignContent="center"
      className={classes.GridContainer}
    >
      <Grid item>
        <HeaderText />
      </Grid>
      <Grid item>
        <Button color="primary" variant="contained">
          Regisztálok
        </Button>
      </Grid>
      <Grid item>
        <Button color="white" variant="outlined">
          Bejelentkezés
        </Button>
      </Grid>
    </Grid>
  );
};

export default Home;
