
var questions=[

  {
    promptText:"True or False: One of my nicknames is Grizzly.",
    answer:"True",
    correctResponse:"Correct",
    wrongResponse:"Wrong"
  },
  {
    promptText:"True or False: I am from Ohio",
    answer:"False",
    correctResponse:"Correct- PA PRIDE, Y'ALL",
    wrongResponse:"Wrong- PA PRIDE, Y'ALL"
  },
  {
    promptText:"True or False: My favorite move is Titanic.",
    answer:'True',
    correctResponse:"Correct- I'll never let go",
    wrongResponse:"Wrong"
  },
  {
    promptText:"True or False: I LOVE Broadway / Musicals.",
    answer:'True',
    correctResponse:"Correct- If only I could sing....",
    wrongResponse:"Wrong"
  },
  {
    promptText:"True or False: I LOVE Broadway / Musicals.",
    answer:'True',
    correctResponse:"Correct- If only I could sing....",
    wrongResponse:"Wrong"
  }
];

questions.forEach(function(question,index){
  var button = document.createElement("button")
  button.innerHTML="Question " + index
  button.addEventListener("click", function(){
    
  })
  document.querySelector("div.buttons").appendChild(button);
  console.log(index);
})



var gameScore = 0;

  function question(index) {
    var nickname = prompt(questions[index].promptText);
      if (nickname === questions[index].answer) {
        alert(questions[index].correctResponse);
        gameScore++;
      }
      else {
        alert(questions[index].wrongResponse);
      }
  }
