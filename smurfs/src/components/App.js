import React, { Component } from "react";
import "./App.css";
import SmurfList from './SmurfList'
import {getSmurfs, addSmurf} from '../actions'
import {connect} from 'react-redux'


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfList smurf={this.props.smurfs}/>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state)
  return {
    smurfs: state.smurfs
  }
}

export default connect(
  mapStateToProps,
  {getSmurfs, addSmurf}
)(App);
// export default App;