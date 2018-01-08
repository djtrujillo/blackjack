import React from 'react'
import Game from './Game'

export default class DealButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <div className="deal-button">
        <button className="db" onClick={this.props.onClick}>New Deal</button>
      </div>
    )
  }
}
