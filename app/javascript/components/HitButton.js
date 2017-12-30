import React from 'react'
import Game from './Game'

export default class HitButton extends React.Component {

  render() {
    return(
      <div>
        <button onClick={this.props.onClick}>Hit</button>
      </div>
    )
  }
}
