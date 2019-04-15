var newQuestionForm = document.getElementById('newQuestionForm');

// Event handler for the submission of a new question.

function handleNewQuestionSubmit(event) {
    event.preventDefault();
    var quizName = event.target.quizName.value;
    var questionType = event.target.questionType.value;
    var questionQuestion = event.target.questionQuestion.value;
    var questionResponses = [event.target.answer1.value, event.target.answer2.value, event.target.answer3.value, event.target.answer4.value];
    var correctAnswer = event.target.correctAnswer.value;


    event.target.quizname.value = null;
    event.target.questionType.value = null;
    event.target.questionQuestion.value = null;
    event.target.answer1.value = null;
    event.target.answer2.value = null;
    event.target.answer3.value = null;
    event.target.answer4.value = null;
    event.target.correctAnswer.value = null;




    new Question(quizName, questionType, questionQuestion, questionResponses, correctAnswer);

}


newQuestionForm.addEventListener('submit', handleNewQuestionSubmit);
