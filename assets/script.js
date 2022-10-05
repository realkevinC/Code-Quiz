// Dependencies (DOM)
var timer = document.querySelector(".timer")
var nav = document.querySelector("nav")
var start = document.getElementById("start")

var startContainer = document.getElementById("startScreen");
var questionsContainer = document.getElementById("questionsPage");
var userScoreContainer = document.getElementById("scorePage");
var highscoreContainer = document.getElementById("highscorePage");
var questionTitle = document.getElementById("quizQuestion");

// Data


var quizQuestions = [ 
  {
    questionTitle: "Commonly used data types DO Not Include: ",
    answerChoices: ["strings", "booleans", "alerts", "numbers"],
    answerQuestion: "alerts"
  },
  {
    questionTitle: "The condition in an if / else statement is enclosed with ",
    answerChoices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    answerQuestion: "parenthesis"
  },
  {
    questionTitle: "Arrays in JavaScript can be used to store ",
    answerChoices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answerQuestion: "all of the above"
  },
  {
    questionTitle: "String values must be enclosed within _____ when being assigned to variables.",
    answerChoices: ["commas", "curly brackets", "quotes", "parenthesis"],
    answerQuestion: "quotes"
  },
  {
    questionTitle: "A very useful tool used during development and debugging for printing content to the debugger is ",
    answerChoices: ["JavaScript", "terminal/bash", "for loops", "console. log"],
    answerQuestion: "console. log"
  },
]

// How do we keep track of what question we are on (?)
var beginscore = 0;

var secondsLeft = 100

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = secondsLeft + "second remaining";
  }, 1000); 
}
// User interaction
// when user click start quiz to begin  --> button.addEventListener("click", callback function (beginGame)



start.addEventListener("click", beginGame);

function beginGame() {
  
  // first question will appear with 4 choice box to choose from
  startQuestions()
  // we start the timer
  setTime()
}


function startQuestions() {
  // hide the #start-screen container
  startContainer.setAttribute("class", "hide");
  // un hide or show this container
  questionsContainer.setAttribute("class", "show");
  questionTitle.textContent = quizQuestions.questionTitle
}
// user can click on one of the box and 
// it will return if the choice is correct answer
// text wrong or correct will be shown bellow the box
// then the next question will appear
// once the all question is attempted user will be shown All done with finial score
// user will put their initials in the text box and click a submit button
// when user click submit it will direct to high score page
// high score page will have their current score and previous score
// it will have a go back button to play again
// it will have a clear high score button to reset the local file



// Initilization
