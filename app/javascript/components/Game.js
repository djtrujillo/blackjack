import React from 'react'
import PlayerCards from './PlayerCards'
import DealerCards from './DealerCards'
import HitButton from './HitButton'
import DealButton from './DealButton'

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function sumCards(array) {
  var total = 0
  for (var i = 0; i < array.length; i++) {
    total = total + array[i].value
  }
  return total
}

export default class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {deck:
      [
        {name:"A", suit:"spade", value:1},
        {name:"A", suit:"club", value:1},
        {name:"A", suit:"heart", value:1},
        {name:"A", suit:"diamond", value:1},
        {name:"K", suit:"spade", value:10},
        {name:"K", suit:"club", value:10},
        {name:"K", suit:"heart", value:10},
        {name:"K", suit:"diamond", value:10},
        {name:"Q", suit:"spade", value:10},
        {name:"Q", suit:"club", value:10},
        {name:"Q", suit:"heart", value:10},
        {name:"Q", suit:"diamond", value:10},
        {name:"J", suit:"spade", value:10},
        {name:"J", suit:"club", value:10},
        {name:"J", suit:"heart", value:10},
        {name:"J", suit:"diamond", value:10},
        {name:"10", suit:"spade", value:10},
        {name:"10", suit:"club", value:10},
        {name:"10", suit:"heart", value:10},
        {name:"10", suit:"diamond", value:10},
        {name:"9", suit:"spade", value:9},
        {name:"9", suit:"club", value:9},
        {name:"9", suit:"heart", value:9},
        {name:"9", suit:"diamond", value:9},
        {name:"8", suit:"spade", value:8},
        {name:"8", suit:"club", value:8},
        {name:"8", suit:"heart", value:8},
        {name:"8", suit:"diamond", value:8},
        {name:"7", suit:"spade", value:7},
        {name:"7", suit:"club", value:7},
        {name:"7", suit:"heart", value:7},
        {name:"7", suit:"diamond", value:7},
        {name:"6", suit:"spade", value:6},
        {name:"6", suit:"club", value:6},
        {name:"6", suit:"heart", value:6},
        {name:"6", suit:"diamond", value:6},
        {name:"5", suit:"spade", value:5},
        {name:"5", suit:"club", value:5},
        {name:"5", suit:"heart", value:5},
        {name:"5", suit:"diamond", value:5},
        {name:"4", suit:"spade", value:4},
        {name:"4", suit:"club", value:4},
        {name:"4", suit:"heart", value:4},
        {name:"4", suit:"diamond", value:4},
        {name:"3", suit:"spade", value:3},
        {name:"3", suit:"club", value:3},
        {name:"3", suit:"heart", value:3},
        {name:"3", suit:"diamond", value:3},
        {name:"2", suit:"spade", value:2},
        {name:"2", suit:"club", value:2},
        {name:"2", suit:"heart", value:2},
        {name:"2", suit:"diamond", value:2}
      ],
      playerCards: [],
      dealerCards: []
    }

    this.handleHit = this.handleHit.bind(this)
    this.handleDeal = this.handleDeal.bind(this)
    this.state.deck = shuffleArray(this.state.deck)
  }


  handleHit() {
    if (sumCards(this.state.playerCards) < 21 ) {
      this.setState({
        playerCards: this.state.playerCards.concat(this.state.deck[0]),
        deck: this.state.deck.slice(1)
      }, function() {
        if (sumCards(this.state.playerCards) > 21 ) {
          alert("You Busted")
        }
      })
    }
  }

  handleDeal() {
    let deck = this.state.deck
    let playerCards = this.state.playerCards
    let dealerCards = this.state.dealerCards
    playerCards.push(deck[0])
    playerCards.push(deck[2])
    dealerCards.push(deck[1])
    dealerCards.push(deck[3])
    this.setState({
      deck: this.state.deck.slice(4),
      dealerCards: dealerCards,
      playerCards: playerCards,
    })
  }


  render() {
    const deck = this.state.deck.map(card =>
       JSON.stringify(card)
    )
    const dealerCards = this.state.dealerCards.map(card =>
      JSON.stringify(card)
    )

    return(
      <div>
        <h1>{deck}</h1>
        <DealerCards cards={this.state.dealerCards} />
        <PlayerCards cards={this.state.playerCards} />
        <HitButton onClick={this.handleHit} />
        <DealButton onClick={this.handleDeal} />
      </div>
    )
  }
}
