// Question Constructor
function Question(quizName, questionType, questionQuestion, questionResponses, correctAnswer) {
    this.quizName = quizName; // Name of quiz this question is associated with.
    this.questionType = questionType; // Question is either TrueFalse or MultipleChoice.
    this.questionQuestion = questionQuestion; // String containing statement of question.
    this.questionResponses = questionResponses; // Array of strings containing possible responses.
    this.correctAnswer = correctAnswer; // Value indicating the index in questionResponse array of the correct answer.

    // save question in question bank in local storage
    if (localStorage['questionBank']) {
        var questions = JSON.parse(localStorage['questionBank']);  
        if (questionType === 'TrueFalse') {
            questions[quizName]['tfQuestions'].push(this);
        } else {
            questions[quizName]['mcQuestions'].push(this);
        }
        localStorage.setItem('questionBank', JSON.stringify(questions));
    } else {
        var questionObj = {};
        questionObj[quizName] =  {};
        if (questionType === 'TrueFalse') {
            questionObj[quizName]['tfQuestions'] = [this];
        } else {
            questionObj[quizName]['mcQuestions'] = [];
        }

        localStorage.setItem('questionBank', JSON.stringify(questionObj));
    }
}

var saveQuestionsInBank = function() {
    new Question('HTML', 'TrueFalse', 'What should be in the first line of every HTML file?', ['<!DOCTYPE html>', '<html>', '<head>', '<body>'], 0);

    new Question('HTML', 'TrueFalse', 'What should be in the first line of every HTML file?', ['<!DOCTYPE html>', '<html>', '<head>', '<body>'], 0);

    new Question('HTML', 'TrueFalse', 'What should be in the first line of every HTML file?', ['<!DOCTYPE html>', '<html>', '<head>', '<body>'], 0);

    new Question('HTML', 'TrueFalse', 'What should be in the first line of every HTML file?', ['<!DOCTYPE html>', '<html>', '<head>', '<body>'], 0);

    new Question('HTML', 'TrueFalse', 'What should be in the first line of every HTML file?', ['<!DOCTYPE html>', '<html>', '<head>', '<body>'], 0);

    new Question('HTML', 'TrueFalse', 'What should be in the first line of every HTML file?', ['<!DOCTYPE html>', '<html>', '<head>', '<body>'], 0);

    new Question('HTML', 'TrueFalse', 'What should be in the first line of every HTML file?', ['<!DOCTYPE html>', '<html>', '<head>', '<body>'], 0);

    new Question('HTML', 'TrueFalse', 'What should be in the first line of every HTML file?', ['<!DOCTYPE html>', '<html>', '<head>', '<body>'], 0);

    new Question('HTML', 'TrueFalse', 'What should be in the first line of every HTML file?', ['<!DOCTYPE html>', '<html>', '<head>', '<body>'], 0);

    new Question('HTML', 'TrueFalse', 'What should be in the first line of every HTML file?', ['<!DOCTYPE html>', '<html>', '<head>', '<body>'], 0);

    new Question('HTML', 'TrueFalse', 'What should be in the first line of every HTML file?', ['<!DOCTYPE html>', '<html>', '<head>', '<body>'], 0);

};

saveQuestionsInBank();
