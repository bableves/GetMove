import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  TextContainer: { width: 600 },
  ModifierWhiteFont: {
    color: 'white',
  },
  ModifierBoldFont: {
    fontWeight: 'bold',
  },
}));

const HeaderText = () => {
  const classes = useStyles();
  return (
    <div className={classes.TextContainer}>
      <Typography
        variant="h2"
        className={`${classes.ModifierWhiteFont} ${classes.ModifierBoldFont}`}
      >
        Lórum ipse letnyi, szuvas, de a drán közves, a tolk pedig
        állott zoncola
      </Typography>
      <Typography
        variant="h4"
        className={`${classes.ModifierWhiteFont}`}
      >
        Ebben encsített a tatagos szarás, immár egy ojása egyetlen
        horzó sem tudott főzelnie a hatló arzáson
      </Typography>
    </div>
  );
};

export default HeaderText;
