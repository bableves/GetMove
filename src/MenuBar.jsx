import React from 'react';
import { NavLink } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
    <Grid container spacing={4} className={classes.container}>
      <Grid item>
        <NavLink
          exact
          to="/"
          className={classes.passiveLink}
          activeClassName={classes.activeLink}
        >
          <Typography variant="h5" className={classes.modifierBold}>
            Home
          </Typography>
        </NavLink>
      </Grid>
      <Grid item>
        <NavLink
          to="/about"
          className={classes.passiveLink}
          activeClassName={classes.activeLink}
        >
          <Typography variant="h5" className={classes.modifierBold}>
            About
          </Typography>
        </NavLink>
      </Grid>
      <Grid item>
        <NavLink
          to="/users"
          className={classes.passiveLink}
          activeClassName={classes.activeLink}
        >
          <Typography variant="h5" className={classes.modifierBold}>
            Users
          </Typography>
        </NavLink>
      </Grid>
    </Grid>
  );
};

export default MenuBar;
