import React from 'react';
import { Grid, Button } from '@material-ui/core';

const MenuButtons = () => (
  <Grid container spacing={1} style={{ paddingRight: '1em' }}>
    <Grid item>
      <Button style={{ color: 'white' }}>Belépés</Button>
    </Grid>
    <Grid item>
      <Button color="secondary" variant="contained">
        Regisztráció
      </Button>
    </Grid>
  </Grid>
);

export default MenuButtons;
