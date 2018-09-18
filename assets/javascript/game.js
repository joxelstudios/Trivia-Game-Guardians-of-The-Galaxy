var gameinfo = {
    questions: ["1.Which song on the film's soundtrack was not played in the movie?", "2. What is the name of Peter Quill's ship?", "3. How many units did The Collector offer for the Orb?", "4. Who voiced Thanos?"],
    answer1: ['"Cherry Bomb" by The Runaways', 'The Dark Aster', '3 million', 'James Spader'],
    answer2: ['"Spirit in the Sky" by Norman Greenbaum', 'The M-Ship', '4 billion', 'Josh Brolin'],
    answer3: ['"Moonage Daydream" by David Bowie', 'The Milano', '6 billion', 'Ving Rhames'],
    answer4: ['"Escape" (The Piña Colada Song) by Rupert Holmes', 'The Morano', '3 billion', 'Keith David'],

    correctAnswers: [1, 2, 1, 1],
}
var questionNum = 0
var interval;
var userGuess;
var correct = 0;
var incorrect = 0;

function startTimer() {
    var timer = 10;
    interval = setInterval(function () {
        timer--;
        // Display 'timer' wherever you want to display it.
        $('#timer1').text(timer);
        if (timer == 0) {
            // Display alert
            alert("Times Up!")
            stopTimer();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
}

function nextQuestion() {
    $('#questionText').text(gameinfo.questions[questionNum]);
    $('#answerA').text(gameinfo.answer1[questionNum]);
    $('#answerB').text(gameinfo.answer2[questionNum]);
    $('#answerC').text(gameinfo.answer3[questionNum]);
    $('#answerD').text(gameinfo.answer4[questionNum]);

}
// PLAYER PRESSES START BUTTON-- RUN START GAME FUNCTION
$('.startButton').on('click', function () {
    startTimer();
    // START GAME FUNCTION HIDES START SCREEN AND DISPLAYS FIRST QUESTION
    $('#startScreen').addClass('hidden');
    $('.question1').removeClass('hidden');

    //set question and timer
    $('#questionText').text(gameinfo.questions[questionNum]);
    $('#answerA').text(gameinfo.answer1[questionNum]);
    $('#answerB').text(gameinfo.answer2[questionNum]);
    $('#answerC').text(gameinfo.answer3[questionNum]);
    $('#answerD').text(gameinfo.answer4[questionNum]);


})
function nextQuestion(){
    $('#questionText').text(gameinfo.questions[questionNum]);
    $('#answerA').text(gameinfo.answer1[questionNum]);
    $('#answerB').text(gameinfo.answer2[questionNum]);
    $('#answerC').text(gameinfo.answer3[questionNum]);
    $('#answerD').text(gameinfo.answer4[questionNum]);
    startTimer();
}

$('.btn-light').on('click', function () {
    userGuess = parseInt($(this).attr("value"));
    console.log(userGuess);
    if (gameinfo.correctAnswers[questionNum] === userGuess) {
        alert('Correct!')
        correct++;
        questionNum++;
        stopTimer();
        nextQuestion();
        
    } else {
        alert('Incorrect!')
        incorrect--;
        questionNum++;
        stopTimer();
        nextQuestion();
       

    }
})