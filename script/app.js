let score = 0 

$('button').on('click', () => {
  console.log('click works');
  // when the user clicks the button, populate the square
  createSquares(30);
});


// create a function named createSquares, that takes in
// a parameter of an abitary number and creates
// divs according to the number in the square class

const createSquares = (numberOfSquares) => {

      for(let i = 0; i <= numberOfSquares; i++) {
        // creating the squares
        const $div = $('<div/>').on('click', disappearSquare);

        // this is where the color is applied
        applyRandomColor($div);
        // attach it to the square class
        $('.squares').append($div);
      }
};
const disappearSquare = (e) => {
  // e is short for event
  // e.current tagreg gives you the div you are clickig on

  // to retrieve a property
  const color = $(e.currentTarget).css('background-color');

  checkValidPoke(color);


  // setting a proprty using jQuery
  $(e.currentTarget).css('opacity', 0);
}
// lets write a function called checkValidPoke
// that takes the color string
// and if it is blue lets update a global scroe variable
const checkValidPoke = (colorAsString) => {

  if(colorAsString === 'rgb(0, 0, 255)'){
    score++
  }else {
    score--
  }
  $('h1').text('Scoreboard: ' + score);
}


// now we have a bunch of blue squares,
// but wee want our squares to have a random,
// red, blue, or green color
// try to write a function to make that happen

const applyRandomColor = (square) => {
    const randNum = Math.floor(Math.random() * 3) + 1;
      // im assuming square is a jQuery object

      if(randNum === 1){
        square.css('background-color', 'red');

    } else if(randNum === 2) {
      square.css('background-color', 'blue');
    } else {
      square.css('background-color', 'green');
    }

};
