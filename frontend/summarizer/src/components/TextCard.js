import React, {Component} from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { CardActionArea, CardMedia } from "@material-ui/core";
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { withStyles} from '@material-ui/core';
import { Grid } from "@material-ui/core";


const { useState, useEffect } = React;

const IsUseContext = React.createContext();

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

class TextCard extends Component{
  constructor(props){
    super(props);
    this.state = {
        summary : sessionStorage.getItem('summary')
    }
  }
 
  componentDidMount = () => {
    console.log("TEXTCARD component loaded")
  }

  componentDidUpdate = () => {
    if(!(sessionStorage.getItem("summary").localeCompare("Loading.."))){
    console.log("STATE CHANGED!!!")
        this.setState({
        summary : sessionStorage.getItem("summary")
    })
  }
}
    clickhere = () => {
        this.setState({
            summary:sessionStorage.getItem("summary")
        })
    }



  render(){
    const { classes } = this.props
    return (
        <Card className={classes.root} variant="outlined">
        <CardContent onclick={this.clickhere}>
          <Typography variant="h5" component="h2">
            {this.state.summary}
          </Typography>
          <Button onClick={this.clickhere}>Click to view Summary</Button>
        </CardContent>
      </Card>
    )
  }
}


  
export default withStyles(useStyles)(TextCard);