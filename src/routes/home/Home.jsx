import React, { useState } from 'react';
import { Button, Grid } from '@material-ui/core';
import cf from '../../utils/assets/asd.jpg';
import { makeStyles } from '@material-ui/core/styles';
import HeaderText from '../../components/home/HeaderText';
import RegisterDialog from '../../components/home/register/RegisterDialog';

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
  const [dialogVisibility, setDialogVisibility] = useState(false);
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
        <Button
          color="secondary"
          variant="contained"
          onClick={() => setDialogVisibility(true)}
        >
          Regisztrálok
        </Button>
        <RegisterDialog
          open={dialogVisibility}
          handleClose={() => setDialogVisibility(false)}
        />
      </Grid>
    </Grid>
  );
};

export default Home;
