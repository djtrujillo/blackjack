import React from 'react'
import {render} from 'react-dom'
import SampleComponent from '../components/SampleComponent'
import Game from '../components/Game'

document.addEventListener('DOMContentLoaded', () => {
  const deckContainer = document.body.appendChild(document.createElement('div'))
  render(<Game />, deckContainer)
})
