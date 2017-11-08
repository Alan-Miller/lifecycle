import React, { Component } from 'react';
import Grandparent from './components/Grandparent';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="header">Lifecycle Methods</div>
        <Grandparent />
      </div>
    )
  }
}