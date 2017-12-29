import React from 'react'
import Game from './Game'


export default class PlayerCards extends React.Component {

  render() {
    const playerCards = this.props.cards.map(card =>
      JSON.stringify(card)
    )

    return(
      <div>
        <h1>{playerCards}</h1>
      </div>
    )
  }
}
