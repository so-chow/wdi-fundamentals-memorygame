//cards array
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

//array to store cards in play
var cardsInPlay = [];

//function to check for match
var checkForMatch = function(){
	if(cardsInPlay[0] === cardsInPlay[1]){
	alert("You found a match!");
	}
	else{
	alert("Sorry, try again.");
	}
};

//function to represent user flipping a card
var flipCard = function(){
	cardId = this.getAttribute('data-id');
	console.log(cardId);

	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suits);

	cardsInPlay.push(cards[cardId].rank);

	this.setAttribute('src', cards[cardId].cardImage);

	if(cardsInPlay.length === 2){
	checkForMatch();
	cardsInPlay = [];
	}
};

//reset button
//var resetButton = function(){
	
//}
//var button = documment.querySelector('button');
//button.addEventListener('click',resetButton);


//function to create board
var createBoard = function(){
	for(var i=0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

createBoard();




