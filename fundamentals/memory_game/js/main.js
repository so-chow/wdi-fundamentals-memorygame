//var cardOne = "queen";
//var cardTwo = "queen";
//var cardThree = "king";
//var cardFour = "king";

//console.log("User flipped " + cardOne);
//console.log("User flipped " + cardTwo);

var cards = [
	{
		rank: 'queen',
		suits: 'hearts',
		cardImage: 'images/queen-of-hearts.png'
	},
	{
		rank: 'queen',
		suits: 'diamonds',
		cardImage: 'images/queen-of-diamonds.png'
	},
	{
		rank: 'king',
		suits: 'hearts',
		cardImage: 'images/king-of-hearts.png'
	},
	{
		rank: 'king',
		suits: 'diamonds',
		cardImage: 'images/king-of-diamonds.png'
	}
];

var cardsInPlay = [];

var checkForMatch = function(){

	if(cardsInPlay[0] === cardsInPlay[1]){
	console.log("You found a match!");
	}
	else{
	console.log("Sorry, try again.");
	}
};



var flipCard = function(cardId){

	if(cardsInPlay.length === 2){
	checkForMatch();
	}

	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suits);
};


flipCard(0);
flipCard(2);



