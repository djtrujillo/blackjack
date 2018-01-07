import React from 'react'
import Game from './Game'
import back from '../images/back'


export default class DealerCards extends React.Component {
  renderImage(imageUrl) {
    if (imageUrl === this.props.downCard.image_path && this.props.handOver === false) {
      return (
        <div key={imageUrl}>
          <img src={back} />
        </div>
      )
    } else {
      return (
        <div  key={imageUrl}>
          <img src={imageUrl} />
        </div>
      )
    }
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
