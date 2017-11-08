import React, { Component } from 'react';
import Parent from './Parent';

class Grandparent extends Component {
  constructor(props) {
    super(props)
    this.state = { gift: 'hugs' }
  }
  render() {
    return (
      <div className="Grandparent">

        Grandparent gives {this.state.gift}
        <div className="buttons">
          <button
            onClick={_ => this.setState({ gift: 'hugs' })}
            className={this.state.gift === 'hugs' ? 'highlight' : null}
          >hugs</button>
          <button
            onClick={_ => this.setState({ gift: '$$$$' })}
            className={this.state.gift === '$$$$' ? 'highlight' : null}
          >$$$$</button>
          <button
            onClick={_ => this.setState({ gift: 'toys' })}
            className={this.state.gift === 'toys' ? 'highlight' : null}
          >toys</button>
        </div>
        <Parent gift={this.state.gift} />
      </div>
    );
  }
}

export default Grandparent;
