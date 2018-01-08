import React from 'react'
import Game from './Game'

export default class BetDecrease extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <div className="bet-decrease">
        <button onClick={this.props.onClick}>Bet Decrease</button>
      </div>
    )
  }
}
