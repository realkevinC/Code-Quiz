// Dependencies (DOM)
var timer = document.querySelector(".timer")
var nav = document.querySelector("nav")
var start = document.getElementById("start")

var startContainer = document.getElementById("startScreen");
var questionsContainer = document.getElementById("questionsPage");
var userScoreContainer = document.getElementById("scorePage");
var highscoreContainer = document.getElementById("highscorePage");

var choiceContainer = document.getElementById("choice-container")
var choiceOne = document.getElementById("choiceOne")
var choiceTwo = document.getElementById("choiceTwo")
var choiceThree = document.getElementById("choiceThree")
var choiceFour = document.getElementById("choiceFour")

var yourFinalScore = document.getElementById("yourFinalScore")
var questionTitle = document.getElementById("quizQuestion");
var response = document.getElementById("response")
var goBack = document.getElementById("goBack")
var clearHighScore = document.getElementById("clearHighScore")
var initials = document.getElementById("initials");
var initialSubmit = document.getElementById("initialSubmit")
var highscores = JSON.parse(localStorage.getItem("highscores")) || []; 
var highScoreList = document.getElementById("highScoreList")

// Data
var currentScore = 0;
var currentQuestion = 0;  // what if we use this to act as an incrementor

var quizQuestions = [ 
  {
    questionTitle: "Commonly used data types DO Not Include: ",
    answerChoices: ["strings", "booleans", "alerts", "numbers"],
    answerQuestion: "alerts",
  },  {
    questionTitle: "The condition in an if / else statement is enclosed with ",
    answerChoices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    answerQuestion: "parenthesis",
  },  {
    questionTitle: "Arrays in JavaScript can be used to store ",
    answerChoices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answerQuestion: "all of the above",
  },  {
    questionTitle: "String values must be enclosed within _____ when being assigned to variables.",
    answerChoices: ["commas", "curly brackets", "quotes", "parenthesis"],
    answerQuestion: "quotes",
  },  {
    questionTitle: "A very useful tool used during development and debugging for printing content to the debugger is ",
    answerChoices: ["JavaScript", "terminal/bash", "for loops", "console. log"],
    answerQuestion: "console. log",
  },
]
// How do we keep track of what question we are on (?)
var secondsLeft = 100


// User interaction
// when user click start quiz to begin  --> button.addEventListener("click", callback function (beginGame)

start.addEventListener("click", beginGame);

function beginGame(event) {
  // console.log(event);
  console.log(event.target);
  // we start the timer
  function setTime() {
  // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = secondsLeft + "second remaining";
      if (secondsLeft === 0 || quizQuestions.length === currentQuestion+1){
        clearInterval(timerInterval);
        endScore();
      }
    }, 1000); 
  }
  setTime()
  // first question will appear with 4 choice box to choose from
  startQuestions()
  // We want these methods to run at a different time in our program
  //highscorePage()
}


function startQuestions() {
  // hide the #start-screen container
  startContainer.setAttribute("class", "hide");
  // un hide or show this container
  questionsContainer.setAttribute("class", "show");
  questionTitle.textContent = quizQuestions[currentQuestion].questionTitle
  choiceOne.textContent = quizQuestions[currentQuestion].answerChoices[0]
  choiceTwo.textContent = quizQuestions[currentQuestion].answerChoices[1]
  choiceThree.textContent = quizQuestions[currentQuestion].answerChoices[2]
  choiceFour.textContent = quizQuestions[currentQuestion].answerChoices[3]
  
  // user can click on one of the box and 
  // it will return if the choice is correct answer
 

  choiceContainer.addEventListener("click", function(event) {
    
    // capture the user selection
    console.log(event.target);
    var userAnswer = event.target.textContent;
    console.log(userAnswer);
    // check against the correct answer
    checkAnswer(userAnswer);
  })
}

function checkAnswer(userAnswer) {

  if (userAnswer === quizQuestions[currentQuestion].answerQuestion) {
    response.textContent = "Correct!";
  }
  else {
    response.textContent = "Wrong!";
    secondsLeft -= 10
  }
  if (quizQuestions.length === currentQuestion+1){
    endScore();
    return;
  }
  currentQuestion++;
  startQuestions();
}
// text wrong or correct will be shown below the box
// then the next question will appear
// once the all question is attempted user will be shown All done with finial score


function endScore() {
  startContainer.setAttribute("class", "hide");
  questionsContainer.setAttribute("class", "hide")
  userScoreContainer.setAttribute("class", "show");
  yourFinalScore.textContent = "Your final score is " + secondsLeft;
  // user will put their initials in the text box and click a submit button
  initialSubmit.textContent = "Submit";
  initials.textContent = "Enter Your Initials: ";
  // when user click submit it will direct to high score page 
}

function highscorePage () {
  startContainer.setAttribute("class", "hide");
  userScoreContainer.setAttribute("class", "hide")
  highscoreContainer.setAttribute("class", "show")
  // localStorage.setItem("yourFinalScore", JSON.stringify (yourFinalScore));
  // high score page will have their current score and previous score
  // it will have a go back button to play again
  // it will have a clear high score button to reset the local file
  
}
var updatedScore = {initials, secondsLeft};

// Initilization

initialSubmit.addEventListener("click", function() {
  var initials = document.getElementById("initials").value;
  console.log(initials)
  var updatedScore = {
    score: secondsLeft,
    initials: initials,
  };
  highscores.push(updatedScore);
  window.localStorage.setItem("highscores", JSON.stringify(highscores));
  highScoreList.textContent = updatedScore.initials + updatedScore.score
  highscorePage();
});

clearHighScore.addEventListener("click", function() {
  localStorage.clear();
});

goBack.addEventListener("click", function(){
  startContainer.setAttribute("class", "show");
  highscoreContainer.setAttribute("class", "hide")
  function reset() {
    secondsLeft = 100;
    currentQuestion = 0;
    }
    reset();
});


