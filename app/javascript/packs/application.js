import React from 'react'
import {render} from 'react-dom'
import SampleComponent from '../components/SampleComponent'
import Deck from '../components/Deck'

document.addEventListener('DOMContentLoaded', () => {
  const deckContainer = document.body.appendChild(document.createElement('div'))
  render(<Deck />, deckContainer)
})
