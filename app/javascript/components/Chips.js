import React from 'react'
import Game from './Game'
import back from '../images/back'


export default class DealerCards extends React.Component {
  renderChip() {
    return (
      <div className='fish red'>
        <div>5</div>
      </div>

    )
  }

  render() {
    const chipNumber = this.props.betAmount / 5
    const chipArray = []
    for (var i=0; i < chipNumber; i++) {chipArray.push(this.renderChip())}
    return(
      <div className='chip'>
        {chipArray.map(chip => chip)}
      </div>
    )
  }
}
