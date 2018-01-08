import React from 'react'
import BetIncrease from './BetIncrease'
import Chips from './Chips'
import BetDecrease from './BetDecrease'
import PlayerCards from './PlayerCards'
import DealerCards from './DealerCards'
import HitButton from './HitButton'
import DealButton from './DealButton'
import ChipRefill from './ChipRefill'
import StayButton from './StayButton'
import DiscardPile from './DiscardPile'
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
import back from '../images/back'
import axios from 'axios'


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
  dealerTotal: 0,
  playerTotal: 0,
  betAmount: 0,
  handOver: false
}

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
  let numberOfAces = numberAces(array)
  while (numberOfAces > 0 && total > 21) {
    numberOfAces -= 1
    total -= 10
  }
return total
}

function numberAces(hand) {
  let array = []
  hand.forEach(function(card) {
    if (card.name === "A") {
      array.push("true")
    }
  })
  return array.length
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

function testForBlackJack(state) {
  if (state.playerTotal === 21) {
    setTimeout(function() {alert("BlackJack!!")}, 300)
    return true
  } else if (state.dealerTotal === 21) {
    setTimeout(function() {alert("Dealer BlackJack")}, 300)
    return true
  } else {
    return false
  }
}

function testForPlayerBlackJack(state) {
  if(state.playerTotal === 21) {
    return true
  } else {
    return false
  }
}

function refreshState(state) {
  return{
    deck: shuffleArray(initialState.deck),
    playerCards: [],
    dealerCards: [],
    playerTotal: 0,
    dealerTotal: 0,
    handOver: false
  }
}

function determineWinner(state) {
  if (state.playerTotal > 21) {
    return "dealer"
  } else if (state.dealerTotal > 21) {
    return "player"
  } else if (state.dealerTotal > state.playerTotal) {
    return "dealer"
  } else {
    return "player"
  }
}

export default class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = initialState
    this.handleHit = this.handleHit.bind(this)
    this.handleDeal = this.handleDeal.bind(this)
    this.handleStay = this.handleStay.bind(this)
    this.handleChipRefill = this.handleChipRefill.bind(this)
    this.handleBetIncrease = this.handleBetIncrease.bind(this)
    this.handleBetDecrease = this.handleBetDecrease.bind(this)

    this.state.deck = shuffleArray(this.state.deck)
  }

  fetchChips(id) {
    axios.get(`api/users/${id}`)
      .then(response => {
        this.setState({ chips: response.data.chips })
      })
      .catch(error => {
        console.log(error(error))
      })
  }

  updateChips(chips) {
    axios({
      method: 'patch',
      url: `api/users/${this.props.user.id}`,
      data: {
        chips: this.state.chips + chips
      }
    })
    .then(response => {
      this.fetchChips(this.props.user.id)
    })
    .catch(error => {
      console.log(error(error))
    })
  }


  componentDidMount() {
    this.fetchChips(this.props.user.id)
  }

  endGameSequence() {
    const winner = determineWinner(this.state)
    this.setState({
      handOver: true,
      betAmount: 0
    })
    if (winner === "player") {
      this.updateChips(this.state.betAmount)
    } else {
      this.updateChips(this.state.betAmount * -1)
    }

    if (this.state.playerTotal > 21) {
      setTimeout(function(){alert("Dealer Wins : You Busted"); }, 300);
    } else if (this.state.dealerTotal > 21) {
      setTimeout(function(){alert("You Win! : Dealer Busted"); }, 300);
    } else if (this.state.dealerTotal > this.state.playerTotal) {
      setTimeout(function(){ alert(`Dealer Wins: ${this.state.dealerTotal} to ${this.state.playerTotal}`); }.bind(this), 300);
    } else {
      setTimeout(function(){alert(`You Win! : ${this.state.playerTotal} to ${this.state.dealerTotal}`); }.bind(this), 300);
    }
  }

  handleHit() {
    this.setState( dealPlayerCard)
    this.setState( calculateTotals, function() {
      if (this.state.playerTotal > 21) {
        this.endGameSequence()
      }
    })
  }

  handleDeal() {
    this.setState( refreshState)
    this.setState( dealPlayerCard)
    this.setState( dealDealerCard)
    this.setState( dealPlayerCard)
    this.setState( dealDealerCard)
    this.setState( calculateTotals, function() {
      if (testForBlackJack(this.state)) {
        this.setState({handOver: true})
        if (testForPlayerBlackJack(this.state)) {
          this.updateChips(this.state.betAmount)
          this.setState({
            handOver: true,
            betAmount: 0
          })
        } else {
          this.updateChips(this.state.betAmount * -1)
          this.setState({
            handOver: true,
            betAmount: 0
          })
        }
      }
    })
  }

  handleStay() {
    this.setState( calculateTotals, function() {
      if (this.state.dealerTotal < 17) {
        this.setState( dealDealerCard)
        this.handleStay()
      } else {
        this.endGameSequence()
      }
    })
  }

  handleChipRefill() {
    this.setState({
      chips: 0
    }, function(){
      this.updateChips(100)
    })
  }

  handleBetIncrease() {
    if (this.state.chips > this.state.betAmount) {
      this.setState({
        betAmount: this.state.betAmount + 5
      })
    }
  }

  handleBetDecrease() {
    this.setState({
      betAmount: this.state.betAmount - 5,
    })
  }

  render() {
    return(
      <div className='row'>
        <div className='column'>
          <div>.
            <Chips betAmount={this.state.betAmount} />
          </div>
        </div>
        <div className='column'>
          <h1>BlackJack</h1>
          <h2>Dealer's Cards</h2>
          <DealerCards cards={this.state.dealerCards} downCard={this.state.dealerCards[0]} handOver={this.state.handOver} />
          <h2>Player's Cards</h2>
          <div className="bottom">
          <PlayerCards cards={this.state.playerCards} />
          <h3>PlayerTotal: {this.state.playerTotal}</h3>


          <div className='moves'>
            <HitButton onClick={this.handleHit} />
            <DealButton onClick={this.handleDeal} />
            <StayButton onClick={this.handleStay} />
          </div>
          <div className="bets">
            <h3>Chip Total: {this.state.chips}</h3>
            <div className="betting">
              <BetDecrease onClick={this.handleBetDecrease} />
              <h3>Bet Amount: {this.state.betAmount}</h3>
              <BetIncrease onClick={this.handleBetIncrease} />
            </div>

            <ChipRefill onClick={this.handleChipRefill} />
          </div>
        </div>
        </div>
        <div className='column'></div>
      </div>
    )
  }
}
