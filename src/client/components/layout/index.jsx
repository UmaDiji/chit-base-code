import React from 'react';
import Header from './Header';
import SideBar from './sidebar';
import AppContainer from './AppContainer';
import { Grid } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1
    },
    fixed: {
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: '240px'
    },
    maincontent: {
      flexGrow: 1,
      padding: 20,
	  paddingBottom: 0
    },
    titlepad: {
      paddingBottom: 20
    }
  })
);

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={2} className={classes.fixed}>
            <SideBar />
          </Grid>
          <Grid
            item
            xs={10}
            container
            direction="column"
            className={classes.maincontent}
          >
            <Grid item justify="center">
              <AppContainer>{children}</AppContainer>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default Layout;
