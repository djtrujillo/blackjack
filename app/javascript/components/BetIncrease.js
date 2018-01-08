import React from 'react'
import Game from './Game'

export default class BetIncrease extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <div className="bet-increase">
        <button onClick={this.props.onClick}>Bet Increase</button>
      </div>
    )
  }
}
