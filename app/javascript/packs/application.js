import React from 'react'
import {render} from 'react-dom'
import SampleComponent from '../components/SampleComponent'
import Game from '../components/Game'
import '../application.css'



document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('user_data')
  const data = JSON.parse(node.getAttribute('data'))
  const deckContainer = document.body.appendChild(document.createElement('div'))
  render(<Game user={data} />, deckContainer)
})
