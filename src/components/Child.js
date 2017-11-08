import React, { Component } from 'react';

export default class Child extends Component {

  constructor() {
    super()
    this.logConstructor = (function () { console.log('constructor') })();
    this.interval;
    this.state = {
      timer: 0
    }
  }

  componentWillMount() { console.log('componentWillMount'); }
  componentDidMount() {
    console.log('componentDidMount');
    // this.interval = setInterval(_ => {
    //   let timer = this.state.timer + 1;
    //   this.setState({ timer })
    // }, 1000); // interval counts up — see clearInterval comments below
    
  }
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    if (nextProps.gift === '$$$$') return false;
    // if (nextProps.gift === this.props.gift) return false; // Don't update if there are no changes to props
    else return true;
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    // clearInterval(this.interval); // clear interval to avoid error where interval is still running but component has unmounted, forcing your app to try to update a component that has unmounted
  }

  componentWillUpdate() { console.log('componentWillUpdate'); }
  componentDidUpdate() { console.log('componentDidUpdate'); }
  componentDidCatch() { console.log('componentDidCatch'); }


  render() {
    console.log('render');
    return (
      <div className="Child">
        Child gets {this.props.gift}
        <br />
        timer: {this.state.timer}
      </div>
    )
  }
}