// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'


function defineSuit(card) {
    const cardSymbol = card.charAt(card.length - 1);
    
      const suitMap = {
           '♣': 'clubs',
           '♦': 'diamonds',
           '♥': 'hearts',
           '♠': 'spades'
       };
   return suitMap[cardSymbol]
   }