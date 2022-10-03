// Dependencies (DOM)
var timer = document.querySelector(.timer)


// Data

var secondsLeft = 100

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = secondsLeft + "second remaining";
    } ; 
}
// User interaction


// Initilization


