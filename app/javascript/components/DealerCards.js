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
    return(
      <div>
  
        <div className="dealer-cards">
          {this.props.cards.map(card => this.renderImage(card.image_path))}
        </div>
      </div>
    )
  }
}
