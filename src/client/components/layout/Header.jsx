import React from 'react';
import { CardHeader, Toolbar, AppBar } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';

const useStyles = makeStyles(theme =>
  createStyles({
    grow: {
      flexGrow: 1,
      anchor: 'top'
    },
    primarybackground: {
      background: 'white'
    },
    title: {
      color: 'blue',
      fontSize: '1rem',
      textTransform: 'none'
    },

    logo: { paddingRight: 20 }
  })
);
const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.grow}>
      <AppBar
        position="static"
        className={classes.primarybackground}
        style={{ background: '#ffffff' }}
      >
        <Toolbar disableGutters>
          <CardHeader
            title="NamApp"
            classes={{
              title: classes.title,
              subheader: classes.subheader
            }}
          />
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Header;
