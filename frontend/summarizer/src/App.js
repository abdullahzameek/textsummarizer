import React, {Component} from 'react';
import Header from './components/Header';
import { Grid } from "@material-ui/core";
import Text from './components/Text';
import TextCard from './components/TextCard';

class App extends Component{
  
  render(){
  return (
    <Grid container direction="column">
    <Grid item>
      <Header />
    </Grid>
    <Grid item container alignItems="center">
      <Grid item/>
        <Text />
      </Grid>
      <Grid item/>
        <TextCard />
    </Grid>
  );
  }
}

export default App;
