// define variables
var score = 0
var timer = document.getElementById('countdown');
var startbutton = document.getElementById('start');
var submit = document.getElementById("submitButton");
var initials = document.getElementById("initials");
var highscore = document.getElementById("highscore");
var finalscores= JSON.parse(window.localStorage.getItem("highscores")) || [];
var scoreContainerEl = document.getElementById("scoreOl");
var currentquestion = 0
var questions = [
  {
    question:"Strict equality in java is represented by:",
    choices:["==", "!=", "==="],
    answer:"==="
  },
  {
    question:"If you would like to store data with no expiration date, what should you use?",
    choices:["localStorage", "sessionStorage", "JSON.parse"],
    answer:"localStorage"
  },
  {
    question:"# is used to reference an id key",
    choices:["true", "false"],
    answer:"true"
  }


]


console.log(questions[0].question)

//create timer
var timeLeft = 30;
// Timer that counts down from 30
function countdown() {
    
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timer.textContent = timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timer.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timer.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval)

        //write code for end timer here

        document.querySelector('#mainmenu').classList.add("hide")
        document.querySelector('#questioncontainer').classList.add("hide")
        document.querySelector('#timeup').classList.remove("hide")

        console.log(score)
        document.querySelector("#score").textContent = score;


      }
    }, 1000);
  }

  // Create an eventlistener to start timer and display questions
  startbutton.addEventListener ("click", function(){
    countdown()
    showquestions()
    document.querySelector("#mainmenu").classList.add("hide")
    document.querySelector("#questioncontainer").classList.remove("hide")

  });

//create an event listener to show highscore page
  highscore.addEventListener ("click", function(){
    document.querySelector("#main").classList.add("hide")
    document.querySelector("#scoresheet").classList.remove("hide")
    for (var i = 0; i < finalscores.length; i += 1) {
      var highScoreText = finalscores[i].initials + " - " + finalscores[i].score;
      var liTag = document.createElement("li");
      liTag.textContent = highScoreText;
      scoreContainerEl.appendChild(liTag);
    }
  });

//create a funtion to display questions once start button is pushed
function showquestions () {
  console.log("Show Questions");
  document.getElementById("buttoncontainer").innerHTML=""
  document.querySelector("#question1").textContent=questions[currentquestion].question
  for (var i=0; i<questions[currentquestion].choices.length; i++) {
    var newbtn=document.createElement("button")
    newbtn.textContent=questions[currentquestion].choices[i]
    newbtn.onclick=function (event){
      nextquestion(event)
    }
    document.getElementById("buttoncontainer").appendChild(newbtn)
  }
}
// create function to show next question
 function nextquestion (event){
  console.log (event.target.textContent)
  if (event.target.textContent == questions[currentquestion].answer){
  alert("Correct!");
  score += 10;
  }
  else
  {alert("I'm sorry, the correct answer was " + questions[currentquestion].answer);
    timeLeft -= 7;

  }
  currentquestion++
showquestions()
 }
// add event listener to store highscore values
 submit.addEventListener ("click", function(){
  var userInitials = initials.value;
  var userScore = score

  console.log(userInitials);
  console.log(userScore);
  var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
  var userScore = {
    score: userScore,
    initials: userInitials,
  };
  highscores.push(userScore);
  window.localStorage.setItem("highscores", JSON.stringify(highscores));
 });