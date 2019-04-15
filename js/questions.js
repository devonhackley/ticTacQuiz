// Question Constructor
var questionBank = [];

function Question(quizName, questionType, questionQuestion, questionResponses, correctAnswer) {
    this.quizName = quizName;                    // Name of quiz this question is associated with.
    this.questionType = questionType;            // Question is either True/False or multiple choice.
    this.questionQuestion = questionQuestion;    // String containing statement of question.
    this.questionResponses = questionResponses;  // Array of strings containing possible responses.
    this.correctAnswer = correctAnswer;          // Value indicating the index in questionResponse array of the correct answer.

    questionBank.push(this);
}

new Question('HTML', 'TrueFalse', 'What should be in the first line of every HTML file?', ['<!DOCTYPE>', '<html>', '<head>', '<body>'], 0);

