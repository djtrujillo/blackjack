import React from 'react'
import Game from './Game'

export default class StayButton extends React.Component {

  render() {
    return(
      <div className="stay-button">
        <button onClick={this.props.onClick}>Stay</button>
      </div>
    )
  }
}
