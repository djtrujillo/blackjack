import React from 'react'
import Game from './Game'

export default class DealButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <div>
        <button onClick={this.props.onClick}>Deal</button>
      </div>
    )
  }
}
