import React from 'react'
import Game from './Game'


export default class DealerCards extends React.Component {
  renderImage(imageUrl) {
    return (
      <div  key={imageUrl}>
        <img src={imageUrl} />
      </div>
    )
  }

  render() {
    // const dealerCards = this.props.cards.map(card =>
    //   JSON.stringify(card)
    // )

    return(
      <div>
        <h1>Dealer's Cards</h1>
        {this.props.cards.map(card => this.renderImage(card.image_path))}

      </div>
    )
  }
}
