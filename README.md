
#BlackJack
This project was completed as my capstone project at the Turing School of Software and Design. The project was required to be completed in two weeks. The requirements for this project also required that I implement it using a new technology that I've previously never used. I chose to build this project as a Rails application but designed the game-logic and UI in React.

The game can be viewed in production at: https://blackjack-1706.herokuapp.com/

###OBJECT OF THE GAME
Each participant attempts to beat the dealer by getting a count as close to 21 as possible, without going over 21.

###CARD VALUES/SCORING
It is up to each individual player if an ace is worth 1 or 11. Face cards are 10 and any other card is its pip value.

###BETTING
Before the deal begins, each player places a bet, in chips, in front of him in the designated area.

##THE DEALER'S PLAY
When the dealer has served every player, his face-down card is turned up. If the total is 17 or more, he must stand. If the total is 16 or under, he must take a card. He must continue to take cards until the total is 17 or more, at which point the dealer must stand. If the dealer has an ace, and counting it as 11 would bring his total to 17 or more (but not over 21), he must count the ace as 11 and stand. The dealer's decisions, then, are automatic on all plays, whereas the player always has the option of taking one or more cards.

######Technologies Used
Javascript, HTML, CSS, React, Ruby, Rails

To Run the App Locally
Clone this repo

Install Packages:
```
bundle install
foreman start
```
