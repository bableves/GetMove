import React from 'react';
import { Grid, Button } from '@material-ui/core';

const MenuButtons = () => (
  <Grid container>
    <Grid item>
      <Button color="primary" variant="outlined">
        Belépés
      </Button>
    </Grid>
    <Grid item>
      <Button color="secondary" variant="outlined">
        Regisztráció
      </Button>
    </Grid>
  </Grid>
);

export default MenuButtons;
