//Quiz Constructor
/* eslint-disable no-unused-vars */
function Quiz(quizName) {
    this.quizName = quizName;
    this.mcQuestions = [];
    this.tfQuestions = [];

    if (!localStorage['quizBank']){
        localStorage.setItem('quizBank', '{}');
    }
    var quizBank = JSON.parse(localStorage['quizBank']);
    quizBank[quizName] = this;
    localStorage.setItem('quizBank', JSON.stringify(quizBank));
    console.log('created quiz in local storage');
}

// Question Constructor
/* eslint-disable no-unused-vars */
function Question(quizName, questionType, questionQuestion, questionResponses, correctAnswer) {
    this.quizName = quizName; // Name of quiz this question is associated with.
    this.questionType = questionType; // Question is either TrueFalse or MultipleChoice.
    this.questionQuestion = questionQuestion; // String containing statement of question.
    this.questionResponses = questionResponses; // Array of strings containing possible responses.
    this.correctAnswer = correctAnswer; // Value indicating the index in questionResponse array of the correct answer.

    // save question in question bank in local storage
    var quizBank = JSON.parse(localStorage['quizBank']);
    var quizQuestionBank = quizBank[quizName];
    if (questionType === 'TrueFalse') {
        quizQuestionBank['tfQuestions'].push(this);
    } else {
        quizQuestionBank['mcQuestions'].push(this);
    }
    localStorage.setItem('quizBank', JSON.stringify(quizBank));
}
