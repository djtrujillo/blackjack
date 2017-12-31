import React from 'react'
import Game from './Game'

export default class HitButton extends React.Component {

  render() {
    return(
      <div className="hit-button">
        <button onClick={this.props.onClick}>Hit</button>
      </div>
    )
  }
}
