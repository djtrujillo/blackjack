import React from 'react'
import Game from './Game'

export default class ChipRefill extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <div className="chip-refill">
        <button onClick={this.props.onClick}>Refill Chips</button>
      </div>
    )
  }
}
