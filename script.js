

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
// excellent!! this will make it super easy to add questions / change answers
// easily in the future.

questions.forEach(function(question,index){
  var button = document.createElement("button");
  document.querySelector("div.buttons").appendChild(button);
  button.innerHTML="Question " + (1 + index);
  button.addEventListener("click", function(){
    showQuestion(index);
    button.disabled=true;
  });
  console.log(index);
});

gameScore = 0;

totalScore();

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
  if (gameScore === questions.length) {
    document.querySelector(".bugs-bunny").src = "http://i.giphy.com/hMlH2yJVPr5qE.gif";
    // download above url to prevent 404 in the future
    // This is the write way to handle gif change!
    // you could also add an argument to this function.
    //
    // e.g. changeGif("url to gif")
    // so you can reuse this function over and over with different images
  }
}

// excellent project 1!!!
// Another approach you could take would be to use input text fields instead of prompts
// to get user input. This will give you more control over the look (CSS) of your project.
//
// Also, you could have gifs related to the question being answered.
//
// Let me know if there are things you have in mind and we can work through them in
// our next 1-1 this week.
