import React, { Component } from 'react';
import axios from 'axios';

import { Route } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import NavBar from './components/NavBar';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      error: ''
    };
  }

  componentDidMount() {
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      this.setState({ smurfs: res.data })
    })
    .catch(err => {
      this.setState ({ error: err})
    })
  }

  addSmurf = (newSmurf) => {
    axios
      .post('http://localhost:3333/smurfs', newSmurf)
      .then(res => {
        this.setState({ smurfs: res.data})
      })
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route path="/" render={props => <Smurfs smurfs={this.state.smurfs} />}/>
        <Route path="/smurf-form" render={props => <SmurfForm addSmurf={this.addSmurf} />}/>
      </div>
    );
  }
}

export default App;
