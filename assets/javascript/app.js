//Global variables object
var trivia = {
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    currentSet: 0,
    timer: 20,
    timerOn: false,
    timerId: '',
// trivia questions object
 questions: {
    q1: 'Who stole the blue horn for Robin?',
    q2: 'How many slaps are in the slap bet?',
    q3: 'Who left Ted at the alter?',
    q4: 'Whos the first person Barney was engaged to?',
    q5: "Which fruit has its own episode title?",
    q6: 'Who did Ted cheat on for Robin?',
    q7: "How many dogs did Robin own?",
    q8: "What was the name of the book Barney based his decisions on?",
    q9: "Whats Teds middle name?",
    q10: "Where did Lily go when she left Marshall for a summer?"
},
// question options object/array
 options: {
    q1: ['Ted', 'Barney', 'Marhsall', 'Lily'],
    q2: ['10', '7', '3', '5'],
    q3: ['Stella', 'Victoria', 'Robin', 'Lily'],
    q4: ['Lily', 'Robin', 'Victoria', 'Quinn'],
    q5: ['Apple', 'Banana', 'Pineapple', 'Pear'],
    q6: ['Quinn', 'Lily', 'Victoria', 'Sarah'],
    q7: ['0', '5', '2', '8'],
    q8: ['The Bro Code', 'The Playbook', 'The Man Code', 'The Hit Book'],
    q9: ['Christopher', 'Lucas', 'Savage', 'Evelyn'],
    q10: ['Japan', 'San Francisco', 'Italy', 'Miami']
},
// correct answers object 
 answers: {
    q1: 'Ted',
    q2: '5',
    q3: 'Stella',
    q4: 'Quinn',
    q5: 'Pineapple',
    q6: 'Victoria',
    q7: '5',
    q8:'The Playbook',
    q9: 'Evelyn',
    q10: 'San Francisco'
}
}

$(document).ready(function() {
    $('#remaining-time').hide();
    $('#start').on('click', trivia.startGame)
});
//start game function
function startGame() {
    trivia.currentSet = 0;
    trivia.correct = 0;
    trivia.incorrect = 0;
    trivia.unanswered = 0;
    clearInterval(trivia.timerId);
    $('#game').show();
    $('#results').html('');
    $('#timer').text(trivia.timer);
    $('#start').hide();
    $('#remaining-time').show();
    trivia.nextQuestion()
};
// function loops through and displays questions and option
function nextQuestion() {
    trivia.timer = 10;
    $('#timer').removeClass('last-seconds');
    $('timer').text(trivia.timer);
    if(!trivia.timerOn) {
        trivia.timerId = setInterval(trivia.timerRunning, 1000);
    };
};
// grabs all questions and indexes current question
var questionContent = Object.values(trivia.questions) [trivia.currentSet];
$('#question').text(questionContent);

//array of user options for current question
var questionOptions = Object.values(trivia.options) [trivia.currentSet];

//writes options to html
$.each(questionOptions, function(index, key) {
    $('#options').append($('<button class option btn btn-info btn-lg>' + key + '</button>'));
})

// decrements counter while counting unanswered questions when the timer runs out
function timerRunning() {
    if(trivia.timer > -1 && trivia.currentSet < Object.keys(trivia.questions).length){
        $('#timer').text(trivia.timer);
        trivia.timer--;
        if(trivia.timer === 4) {
            $('#timer').addClass('last-seconds');
        }
    }
}




    