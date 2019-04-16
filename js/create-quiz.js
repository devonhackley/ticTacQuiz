var newQuestionForm = document.getElementById('newQuestionForm');
var responseSection = document.getElementById('responseSection');
var questionTypeSection = document.getElementById('questionTypeSection');
var quizNameSelector = document.getElementById('quizName');

// Event handler for the submission of a new question.

function handleNewQuestionSubmit(event) {
    event.preventDefault();
    var quizName = quizNameSelector.value;
    var questionType = event.target.questionType.value;
    var questionQuestion = event.target.questionQuestion.value;
    if (questionType === 'TrueFalse') {
        var questionResponses = ['True', 'False'];
    } else {
        questionResponses = [event.target.answer1.value, event.target.answer2.value, event.target.answer3.value, event.target.answer4.value];
        event.target.answer1.value = null;
        event.target.answer2.value = null;
        event.target.answer3.value = null;
        event.target.answer4.value = null;
    }
    var correctAnswer = parseInt(event.target.correctAnswer.value);
    event.target.questionType.value = null;
    event.target.questionQuestion.value = null;


    event.target.correctAnswer.value = null;

    // eslint-disable-next-line no-undef
    new Question(quizName, questionType, questionQuestion, questionResponses, correctAnswer);

}

// This function is the event handler for switching between TrueFalse and MultipleChoice type questions.
function questionTypeHandler(event) {
    responseSection.innerHTML = '';

    var questionType = event.target.value;
    var inputEl;
    var labelEl;

    if (questionType === 'TrueFalse') {
        var radioEl = document.createElement('input');

        radioEl.setAttribute('name', 'correctAnswer');
        radioEl.setAttribute('type', 'radio');
        radioEl.setAttribute('value', '0');
        radioEl.setAttribute('checked', '');
        responseSection.append('True ', radioEl, document.createElement('br'));
        radioEl = document.createElement('input');
        radioEl.setAttribute('name', 'correctAnswer');
        radioEl.setAttribute('type', 'radio');
        radioEl.setAttribute('value', '1');
        responseSection.append('False', radioEl);

    } else if (questionType === 'MultipleChoice'){
        for (var i = 0 ; i < 4 ; i++) {
            inputEl = document.createElement('input');
            radioEl = document.createElement('input');
            labelEl = document.createElement('label');
            labelEl.setAttribute('for', `answer${i + 1}`);
            labelEl.textContent = `Answer ${i + 1}:`;
            responseSection.append(labelEl);
            inputEl.setAttribute('name', `answer${i + 1}`);
            inputEl.setAttribute('type', 'text');
            inputEl.setAttribute('placeholder', 'Type response here... ');
            responseSection.append(inputEl);
            radioEl.setAttribute('name', 'correctAnswer');
            radioEl.setAttribute('type', 'radio');
            radioEl.setAttribute('value', i);
            if (i === 0) {
                radioEl.setAttribute('checked', '');
            }
            responseSection.append(radioEl, document.createElement('br'));
        }
    }
}
var quizBank = JSON.parse(localStorage['quizBank']);

// function displayCurrentQuiz(event) {

//     var liEl = document.createElement('li');
//     var currentQuiz = quizNameSelector.value;

//     for (var i = 0 ; i < Object.keys(quizBank[currentQuiz]).length ; i++) {

//     }


// var currentQuestions = quizBank. ;
// }

function fillQuizSelector() {

    var optionEl;
    // Later, include a placeholder option here
    for (var i = 0 ; i < Object.keys(quizBank).length ; i++) {
        optionEl = document.createElement('option');
        optionEl.setAttribute('value', Object.keys(quizBank)[i]);
        optionEl.textContent = Object.keys(quizBank)[i];
        quizNameSelector.append(optionEl);
    }
}

// These are the event listeners for the Question Type selectors and for the Add New Question button.
newQuestionForm.addEventListener('submit', handleNewQuestionSubmit);
questionTypeSection.addEventListener('input', questionTypeHandler);

// This line fills the Quiz Selector on page load.
fillQuizSelector();
