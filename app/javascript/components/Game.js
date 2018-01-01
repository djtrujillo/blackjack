import React from 'react'
import PlayerCards from './PlayerCards'
import DealerCards from './DealerCards'
import HitButton from './HitButton'
import DealButton from './DealButton'
import StayButton from './StayButton'
import aceclubs from '../images/aceclubs'
import twoclubs from '../images/c02'
import threeclubs from '../images/c03'
import fourclubs from '../images/c04'
import fiveclubs from '../images/c05'
import sixclubs from '../images/c06'
import sevenclubs from '../images/c07'
import eightclubs from '../images/c08'
import nineclubs from '../images/c09'
import tenclubs from '../images/c10'
import jackclubs from '../images/c11'
import queenclubs from '../images/c12'
import kingclubs from '../images/c13'
import acehearts from '../images/h01'
import twohearts from '../images/h02'
import threehearts from '../images/h03'
import fourhearts from '../images/h04'
import fivehearts from '../images/h05'
import sixhearts from '../images/h06'
import sevenhearts from '../images/h07'
import eighthearts from '../images/h08'
import ninehearts from '../images/h09'
import tenhearts from '../images/h10'
import jackhearts from '../images/h11'
import queenhearts from '../images/h12'
import kinghearts from '../images/h13'
import acediamonds from '../images/d01'
import twodiamonds from '../images/d02'
import threediamonds from '../images/d03'
import fourdiamonds from '../images/d04'
import fivediamonds from '../images/d05'
import sixdiamonds from '../images/d06'
import sevendiamonds from '../images/d07'
import eightdiamonds from '../images/d08'
import ninediamonds from '../images/d09'
import tendiamonds from '../images/d10'
import jackdiamonds from '../images/d11'
import queendiamonds from '../images/d12'
import kingdiamonds from '../images/d13'
import acespades from '../images/s01'
import twospades from '../images/s02'
import threespades from '../images/s03'
import fourspades from '../images/s04'
import fivespades from '../images/s05'
import sixspades from '../images/s06'
import sevenspades from '../images/s07'
import eightspades from '../images/s08'
import ninespades from '../images/s09'
import tenspades from '../images/s10'
import jackspades from '../images/s11'
import queenspades from '../images/s12'
import kingspades from '../images/s13'


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
  if (testForAce(array) && total > 21) {
    total -= 10
  }
  return total
}

function testForAce(hand) {
  let array = []
  hand.forEach(function(card) {
    if (card.name === "A") {
      array.push("true")
    }
  })
  if (array.length > 0) {
    return true
  } else {
    return false
  }
}

const initialState =
{deck:
  [
    {name:"A", suit:"spade", value:11, image_path: acespades},
    {name:"A", suit:"club", value:11, image_path: aceclubs},
    {name:"A", suit:"heart", value:11, image_path: acehearts},
    {name:"A", suit:"diamond", value:11, image_path: acediamonds},
    {name:"K", suit:"spade", value:10, image_path: kingspades},
    {name:"K", suit:"club", value:10, image_path: kingclubs},
    {name:"K", suit:"heart", value:10, image_path: kinghearts},
    {name:"K", suit:"diamond", value:10, image_path: kingdiamonds},
    {name:"Q", suit:"spade", value:10, image_path: queenspades},
    {name:"Q", suit:"club", value:10, image_path: queenclubs},
    {name:"Q", suit:"heart", value:10, image_path: queenhearts},
    {name:"Q", suit:"diamond", value:10, image_path: queendiamonds},
    {name:"J", suit:"spade", value:10, image_path: jackspades},
    {name:"J", suit:"club", value:10, image_path: jackclubs},
    {name:"J", suit:"heart", value:10, image_path: jackhearts},
    {name:"J", suit:"diamond", value:10, image_path: jackdiamonds},
    {name:"10", suit:"spade", value:10, image_path: tenspades},
    {name:"10", suit:"club", value:10, image_path: tenclubs},
    {name:"10", suit:"heart", value:10, image_path: tenhearts},
    {name:"10", suit:"diamond", value:10, image_path: tendiamonds},
    {name:"9", suit:"spade", value:9, image_path: ninespades},
    {name:"9", suit:"club", value:9, image_path: nineclubs},
    {name:"9", suit:"heart", value:9, image_path: ninehearts},
    {name:"9", suit:"diamond", value:9, image_path: ninediamonds},
    {name:"8", suit:"spade", value:8, image_path: eightspades},
    {name:"8", suit:"club", value:8, image_path: eightclubs},
    {name:"8", suit:"heart", value:8, image_path: eighthearts},
    {name:"8", suit:"diamond", value:8, image_path: eightdiamonds},
    {name:"7", suit:"spade", value:7, image_path: sevenspades},
    {name:"7", suit:"club", value:7, image_path: sevenclubs},
    {name:"7", suit:"heart", value:7, image_path: sevenhearts},
    {name:"7", suit:"diamond", value:7, image_path: sevendiamonds},
    {name:"6", suit:"spade", value:6, image_path: sixspades},
    {name:"6", suit:"club", value:6, image_path: sixclubs},
    {name:"6", suit:"heart", value:6, image_path: sixhearts},
    {name:"6", suit:"diamond", value:6, image_path: sixdiamonds},
    {name:"5", suit:"spade", value:5, image_path: fivespades},
    {name:"5", suit:"club", value:5, image_path: fiveclubs},
    {name:"5", suit:"heart", value:5, image_path: fivehearts},
    {name:"5", suit:"diamond", value:5, image_path: fivediamonds},
    {name:"4", suit:"spade", value:4, image_path: fourspades},
    {name:"4", suit:"club", value:4, image_path: fourclubs},
    {name:"4", suit:"heart", value:4, image_path: fourhearts},
    {name:"4", suit:"diamond", value:4, image_path: fourdiamonds},
    {name:"3", suit:"spade", value:3, image_path: threespades},
    {name:"3", suit:"club", value:3, image_path: threeclubs},
    {name:"3", suit:"heart", value:3, image_path: threehearts},
    {name:"3", suit:"diamond", value:3, image_path: threediamonds},
    {name:"2", suit:"spade", value:2, image_path: twospades},
    {name:"2", suit:"club", value:2, image_path: twoclubs},
    {name:"2", suit:"heart", value:2, image_path: twohearts},
    {name:"2", suit:"diamond", value:2, image_path: twodiamonds},
  ],
  playerCards: [],
  dealerCards: [],

}

function dealPlayerCard(state, props) {
  return {
    playerCards: state.playerCards.concat(state.deck[0]),
    deck: state.deck.slice(1)
  }
}

function dealDealerCard(state, props) {
  return {
    dealerCards: state.dealerCards.concat(state.deck[0]),
    deck: state.deck.slice(1)
  }
}

function calculateTotals(state, props) {
  return {
    playerTotal: sumCards(state.playerCards),
    dealerTotal: sumCards(state.dealerCards)
  }
}




export default class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = initialState

    this.handleHit = this.handleHit.bind(this)
    this.handleDeal = this.handleDeal.bind(this)
    this.handleStay = this.handleStay.bind(this)
    this.dealDealerCards = this.dealDealerCards.bind(this)
    this.state.deck = shuffleArray(this.state.deck)
  }

  refreshState() {
    this.setState({
      deck: initialState.deck,
      playerCards: [],
      dealerCards: []
    })
  }

  handleHit() {
    this.setState( dealPlayerCard)
    this.setState( calculateTotals)
  }

  // handleHit() {

    // if (sumCards(this.state.playerCards) < 21 ) {
    //   this.setState({
    //     playerCards: this.state.playerCards.concat(this.state.deck[0]),
    //     deck: this.state.deck.slice(1)
    //   }, function() {
    //     if (sumCards(this.state.playerCards) > 21 ) {
    //       alert("You Busted")
    //       this.refreshState()
    //     }
    //   })
    // }
  // }

  handleDeal() {
    this.setState( dealPlayerCard)
    this.setState( dealDealerCard)
    this.setState( dealPlayerCard)
    this.setState( dealDealerCard)
    this.setState( calculateTotals)

  }
  // handleDeal() {
  //   let deck = shuffleArray(initialState.deck)
  //   let playerCards = []
  //   let dealerCards = []
  //   playerCards.push(deck[0])
  //   playerCards.push(deck[2])
  //   dealerCards.push(deck[1])
  //   dealerCards.push(deck[3])
  //   this.setState({
  //     deck: deck.slice(4),
  //     dealerCards: dealerCards,
  //     playerCards: playerCards,
  //   }, function() {
  //     this.calculateTotals()
  //   })
  // }

  dealDealerCards() {
    let dealerCards = this.state.dealerCards

    dealerCards.push(this.state.deck[0])
    this.setState({
      deck: this.state.deck.slice(1),
      dealerCards: dealerCards
    }, function() {
      if (sumCards(this.state.dealerCards) < 17) {
        this.dealDealerCards()
      }
    })
  }

  handleStay() {
    if (sumCards(this.state.dealerCards) < 17) {
      this.dealDealerCards()
    }
    this.endGameSequence()
  }

  endGameSequence() {
    if (sumCards(this.state.dealerCards) > 21) {
      alert("Dealer Busted")
    } else if (sumCards(this.state.dealerCards) > sumCards(this.state.playerCards)) {
      alert("Dealer Wins")
    } else {
      alert("You Win!")
    }
  }

  render() {
    const deck = this.state.deck.map(card =>
       JSON.stringify(card)
    )

    // const dealerCards = this.state.dealerCards.map(card =>
    //   JSON.stringify(card)
    // )

    return(
      <div>
        <h1>{this.state.playerTotal}</h1>
        <h1 className="title">BlackJack!!</h1>
        <div className="dealer">
          <h2>Dealer's Cards</h2>
          <DealerCards cards={this.state.dealerCards} />
          <h3>DealerTotal: {this.state.dealerTotal}</h3>
        </div>
        <div className="player" >
          <h2>Player's Cards</h2>
          <PlayerCards cards={this.state.playerCards} />
          <h3>PlayerTotal: {this.state.playerTotal}</h3>
          <HitButton onClick={this.handleHit} />
          <StayButton onClick={this.handleStay} />
          <DealButton onClick={this.handleDeal} />
        </div>
      </div>
    )
  }
}
