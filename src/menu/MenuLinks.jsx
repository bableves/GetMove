import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const MenuLinks = ({ classes }) => (
  <Grid container spacing={4}>
    <Grid item>
      <NavLink
        exact
        to="/"
        className={classes.passiveLink}
        activeClassName={classes.activeLink}
      >
        <Typography variant="h5" className={classes.modifierBold}>
          Bemutatkozás
        </Typography>
      </NavLink>
    </Grid>
    <Grid item>
      <NavLink
        to="/template1"
        className={classes.passiveLink}
        activeClassName={classes.activeLink}
      >
        <Typography variant="h5" className={classes.modifierBold}>
          Template
        </Typography>
      </NavLink>
    </Grid>
    <Grid item>
      <NavLink
        to="/template2"
        className={classes.passiveLink}
        activeClassName={classes.activeLink}
      >
        <Typography variant="h5" className={classes.modifierBold}>
          Template
        </Typography>
      </NavLink>
    </Grid>
  </Grid>
);

MenuLinks.propTypes = {
  classes: PropTypes.shape({
    container: PropTypes.string.isRequired,
  }),
};

export default MenuLinks;
