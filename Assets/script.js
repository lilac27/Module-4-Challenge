var highscore 
var timer = document.getElementById('countdown');
var startbutton = document.getElementById('start');
var questions = [
  {
    question:"This is question 1",
    choices:["choice 1", "choice 2", "choice 3"],
    answer:"choice 3"
  },
  {
    question:"This is question 2",
    choices:["choice 1", "choice 2", "choice 3"],
    answer:"choice 1"
  },
  {
    question:"This is question 3",
    choices:["choice 1", "choice 2", "choice 3"],
    answer:"choice 1"
  }


]
var currentquestion = 0

console.log(questions[0].question)

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
        clearInterval(timeInterval);
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
 function nextquestion (event){
  console.log (event.target.textContent)
  
  if (event.target.textContent == questions[currentquestion].answer){
  alert("Correct!");}
  else
  {alert("I'm sorry, the correct answer was " + questions[currentquestion].answer);
    timeLeft -= 7;

  }

  currentquestion++
showquestions()
 }
 


// hold answers in local storage for highscore page
// make highscore page, starts as hidden then remove the attribute