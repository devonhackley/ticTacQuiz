var newQuestionForm = document.getElementById('newQuestionForm');
var responseSection = document.getElementById('responseSection');
var questionTypeSection = document.getElementById('questionTypeSection');

// Event handler for the submission of a new question.

function handleNewQuestionSubmit(event) {
    event.preventDefault();
    var quizName = event.target.quizName.value;
    var questionType = event.target.questionType.value;
    var questionQuestion = event.target.questionQuestion.value;
    if (questionType === 'TrueFalse') {
        var questionResponses = ['true', 'false'];
    } else {
        questionResponses = [event.target.answer1.value, event.target.answer2.value, event.target.answer3.value, event.target.answer4.value];
        event.target.answer1.value = null;
        event.target.answer2.value = null;
        event.target.answer3.value = null;
        event.target.answer4.value = null;
    }
    var correctAnswer = event.target.correctAnswer.value;

    event.target.quizName.value = null;
    event.target.questionType.value = null;
    event.target.questionQuestion.value = null;


    event.target.correctAnswer.value = null;

    // eslint-disable-next-line no-undef
    new Question(quizName, questionType, questionQuestion, questionResponses, correctAnswer);

}

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








newQuestionForm.addEventListener('submit', handleNewQuestionSubmit);
questionTypeSection.addEventListener('input', questionTypeHandler);

