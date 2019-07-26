import React, { Component } from "react";
import "./App.css";
import SmurfList from './SmurfList'
import SmurfForm from './SmurfForm'
import { connect } from "react-redux"
import { getSmurfs, addSmurf } from "../actions"


class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfList smurfs={this.props.smurfs} />
        <SmurfForm smurfs={this.props.smurfs} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state, "Log state in mapStateToProps")
  return {
    smurfs: state.smurfs
  }
}

export default connect(
  mapStateToProps,
  {getSmurfs, addSmurf}
)(App);

// export default App;