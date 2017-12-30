import React from 'react'
import Game from './Game'


export default class PlayerCards extends React.Component {
  renderImage(imageUrl) {
    return (
      <div>
        <img src={imageUrl} />
      </div>
    )
  }

  render() {
    // const playerCards = this.props.cards.map(card =>
    //   JSON.stringify(card.name)
    // )

    return(
      <div>
        <h1>Player's Cards</h1>
          {this.props.cards.map(card => this.renderImage(card.image_path))}

      </div>
    )
  }
}
