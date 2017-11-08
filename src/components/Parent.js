import React, { Component } from 'react';
import Child from './Child';

export default class Parent extends Component {

  constructor(props) {
    super(props);
    this.state = { nap: false };
  }

  render() {
    const buttonText = this.state.nap ?
      'wake Child up'
      : 'put Child down for nap'

    return (
      <div className="Parent">
        Parent gets {this.props.gift}
        <button onClick={_ => this.setState({ nap: !this.state.nap })}>
          {buttonText}</button>
        {this.state.nap ? null : (
          <Child gift={this.props.gift} nap={this.state.nap} />
        )}
      </div>
    )
  }
}