import React from 'react'
import Game from './DiscardPile'

export default class DiscardPile extends React.Component {
  renderImage(imageUrl) {
    return (
      <div key={imageUrl}>
        <img src={imageUrl} />
      </div>
    )
  }

  render() {
    return (
      <div className="discard-pile">
        {this.props.cards.map(card => this.renderImage(card.image_path))}
      </div>
    )
  }
}
