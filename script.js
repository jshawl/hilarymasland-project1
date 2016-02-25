

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
    promptText:"True or False: My favorite movie is Titanic.",
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
];

questions.forEach(function(question,index){
  var button = document.createElement("button");
  document.querySelector("div.buttons").appendChild(button);
  button.innerHTML="Question " + (1 + index);
  button.addEventListener("click", function(){
    showQuestion(index);
    button.disabled=true;
  });
  button.addEventListener("click", buttonClick);
  console.log(index);
});

gameScore = 0;

totalScore();

function buttonClick() {
  console.log("button click");

}
function showQuestion(index){
  var nickname = prompt(questions[index].promptText);
    if (nickname === questions[index].answer) {
      alert(questions[index].correctResponse);
      gameScore++;
      totalScore();
      changeGif();
      alert("Please move to the next Question. Your score is: " + gameScore);
    }
    else {
      alert(questions[index].wrongResponse);
      alert("Please move to the next Question. Your score is: " + gameScore);
    }
  }

  function totalScore(){
    var span = document.querySelector(".score");
    span.innerHTML=gameScore + "/" + questions.length;
  }
  function changeGif(){
    if (gameScore === questions.length
    ) {
    document.querySelector(".bugs-bunny").src = "http://i.giphy.com/hMlH2yJVPr5qE.gif";
  }
}
  /*function changeGif(){
   If totalScore === 4/4 {
  replace gif with http://i.giphy.com/hMlH2yJVPr5qE.gif
  */
