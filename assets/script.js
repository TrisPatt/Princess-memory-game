//create an array of objects for the 16 cards
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

//To duplicate the cards
const cards = [...cardPickArray, ...cardPickArray];

console.log(cards);

