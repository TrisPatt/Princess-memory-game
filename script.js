//create an array of objects for the 8 cards
const cardPickArray = [
    {name: 'Ariel', img: 'assets/images/Ariel.webp'},
    {name: 'Aurora', img: 'assets/images/Aurora.webp'},
    {name: 'Belle', img: 'assets/images/Belle.webp'},
    {name: 'Cinderella', img: 'assets/images/cinderella.webp'},
    {name: 'Jasmine', img: 'assets/images/Jasmine.webp'},
    {name: 'Moana', img: 'assets/images/Moana.webp'},
    {name: 'Rapunzel', img: 'assets/images/Rapunzel.webp'},
    {name: 'Tiana', img: 'assets/images/Tiana.webp'},
]

//To duplicate the cards to make pairs
const cards = [...cardPickArray, ...cardPickArray];

//Randomise cards
cards.sort(() => 0.5 - Math.random());

//To create the game area
const gameArea = document.querySelector('#game-area')
function createCards() {
    for (let i = 0; i< cards.length; i++) {
    let card = document.createElement('img');
    card.setAttribute('src' , 'assets/images/Disney_Princess_logo_PNG2.png');
    card.setAttribute('data-Id', i);
    gameArea.appendChild(card);
    }
}
createCards();


