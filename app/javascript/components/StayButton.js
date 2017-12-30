import React from 'react'
import Game from './Game'

export default class StayButton extends React.Component {

  render() {
    return(
      <div>
        <button onClick={this.props.onClick}>Stay</button>
      </div>
    )
  }
}
