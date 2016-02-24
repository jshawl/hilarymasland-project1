
var gameScore = 0;

  function questionOne() {
    var nickname = prompt("True or False: One of my nicknames is Grizzly.");
      if (nickname === 'True') {
        alert("Correct");
        gameScore++;
      }
      else {
        alert("Wrong");
      }
  }

  function questionTwo() {
    var state= prompt("True or False: I am from Ohio.");
      if (state === 'False') {
        alert("Correct- PA PRIDE, Y'ALL");
        gameScore++;
      }
      else {
        alert("Wrong- PA PRIDE, Y'ALL");
      }
  }

  function questionThree() {
    var movie = prompt("True or False: My favorite move is Titanic.");
      if (movie === 'True') {
        alert("Correct- I'll never let go");
        gameScore++;

      }
      else {
        alert("Wrong");
      }
  }

  function questionFour() {
    var broadway = prompt("True or False: I LOVE Broadway / Musicals.");
      if (broadway === 'True') {
        alert("Correct- If only I could sing....");
        gameScore++;
      }
      else {
        alert("Wrong");
        alert(gameScore);
      }
  }
