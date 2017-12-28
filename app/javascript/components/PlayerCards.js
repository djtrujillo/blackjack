import React from 'react'
import Game from './Game'


export default class PlayerCards extends React.Component {
  constructor(props) {
    super(props)
    this.state = {cards: [this.props.cards[0], this.props.cards[1]]}
  }

  render() {
    return(
      <div>
        <h1>{this.state.cards}</h1>
      </div>
    )
  }
}
