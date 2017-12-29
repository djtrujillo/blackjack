import React from 'react'
import Game from './Game'


export default class DealerCards extends React.Component {

  render() {
    const dealerCards = this.props.cards.map(card =>
      JSON.stringify(card)
    )

    return(
      <div>
        <h1>{dealerCards}</h1>
      </div>
    )
  }
}
