/*

1. Make the function deck_o_cards assemble an array of cards using the provided suits and values arrays. Each card in the deck should be an object formatted as:
{suit: 'hearts', value: 'A'}

2. Make deck_o_cards return a shuffled array of cards.

3. Call deck_o_cards, then print the following:
"The deck has {n} cards"
"The top card is the {value} of {suit}"

*/
function deck_o_cards() {
  var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
  var suits = ['hearts', 'diamonds', 'clubs', 'spades'];

  var cards = []; // deck 
  var shuffledCards = []; // deck shuffled
  
  var topCard = null;
  
  // Make 52 card objects and store them in the "cards" array
  for (var i = 0; i < suits.length; i++) {
    // Going through the suits
    //console.log(suits[i]);
    
    var card = {};
    
    //going thrugh the values
    for (var j = 0; j < values.length; j++) {
      //creating a card object that has a suit and value
      card = {
        suit: suits[i],
        value: values[j]
      };
      
      //console.log(card);
      //pushing all the card objects into the cards array
      cards.push(card);
    }
  }
  
  //console.log(cards);
  
  // Shuffle the cards
  shuffledCards = shuffle(cards);
  
  console.log(shuffledCards);
  
  // Pull the top card
  topCard = shuffledCards[0];
  
  //console.log(topCard);
  
  // Print the results 
  console.log('The deck has ' + shuffledCards.length + ' cards');
  
  console.log('The top card is the ' + topCard.value + ' of ' + topCard.suit);
}


// Fisher-Yates Shuffle 
// http://stackoverflow.com/a/6274398
function shuffle(array) {
    var counter = array.length, temp, index;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

// Call the function
deck_o_cards();
