angular.module('quizApp', [])
  .controller('QuizController', function() {
    var vm = this;

    vm.questions = [
      {
        text: 'What is the sum of 5+6?',
        options: ['10', '22', '11'],
        answer: '11'
      },
      {
        text: 'who is the master of blaster in cricket?',
        options: ['virat', 'sachin Tendulkar', 'dhoni'],
        answer: 'sachin Tendulkar'
      },
      {
        text: 'What is the powerhouse of the cell?',
        options: ['Nucleus', 'Mitochondria', 'Ribosome'],
        answer: 'Mitochondria'
      }
    ];

    vm.score = 0;

    vm.checkAnswer = function(question, selectedOption) {
      if (selectedOption === question.answer) {
        vm.score++;
      }
    };
  });
