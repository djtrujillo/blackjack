import React from 'react'
import Game from './Game'


export default class DealerCards extends React.Component {
  constructor(props) {
    super(props)
    this.state = {cards: [this.props.cards[0], this.props.cards[1]]}
  }

  render() {
    const dealerCards = this.state.cards.map(card =>
      JSON.stringify(card)
    )

    return(
      <div>
        <h1>{dealerCards}</h1>
      </div>
    )
  }
}
