import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { fade, makeStyles } from '@material-ui/core/styles';
import {withStyles} from '@material-ui/core'
import {Redirect} from 'react-router-dom'

const useStyles = theme => ({
    nav: {
        background: "#121212",
        // boxShadow: "none",
        // marginBottom: "15px",
    },
    title: {
        textAlign : "center",
    }
});

class Header extends Component{
  constructor(props){
      super(props)
      sessionStorage.setItem("summary", "")
  }

  render(){
  const { classes } = this.props
  return (
    <div>
      <AppBar position="static" className={classes.nav}>
        <Toolbar>
          <Typography className={classes.title} variant="h6">
            Text Summarizer 
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
  }
}
export default withStyles(useStyles)(Header);