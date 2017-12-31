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

    return(
      <div>
  
        <div className="player-cards">
          {this.props.cards.map(card => this.renderImage(card.image_path))}
        </div>
      </div>
    )
  }
}
