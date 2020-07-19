import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuLinks from './MenuLinks';
import MenuButtons from './MenuButtons';

const useStyles = makeStyles((theme) => ({
  container: {
    background: 'black',
    padding: `${theme.spacing(3)}px 0px ${theme.spacing(
      3,
    )}px ${theme.spacing(2)}px`,
  },
  passiveLink: {
    color: 'white',
    textDecoration: 'unset',
    textTransform: 'uppercase',
  },
  activeLink: {
    color: 'grey',
    textDecoration: 'unset',
    textTransform: 'uppercase',
  },
  modifierBold: {
    fontWeight: 'bold',
  },
}));

const MenuBar = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="space-between"
      className={classes.container}
    >
      <Grid item>
        <MenuLinks classes={classes} />
      </Grid>
      <Grid item>
        <MenuButtons />
      </Grid>
    </Grid>
  );
};

export default MenuBar;
