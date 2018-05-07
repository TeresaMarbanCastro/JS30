describe("The scoreboard", function(){
  
const fullQuestionData = [
  {
    questionId: 1,
    question: '¿Cuál es la capital de Zambia?',
    answers: [
      {id: 1, value: 'Lusaka'},
      {id: 2, value: 'Madrid'},
      {id: 1, value: 'Harare'}
    ],
    correctAnswer: {id: 1}
  },

  {
    questionId: 2,
    question: '¿Cuántos años tiene Celio?',
    answers: [
      {id: 1, value: 18},
      {id: 2, value: 'No lo sabe ni ella'},
      {id: 1, value: 103}
    ],
    correctAnswer: { 
      id: 2
    }
  },
  {
    questionId: 3,
    question: '¿Cuál es el nombre de Freud?',
    answers: [
      {id: 1, value: 'Adolf'},
      {id: 2, value: 'Sefarad'},
      {id: 1, value: 'Sigmund'}
    ],
    correctAnswer: {id: 3}
  }
];

var correctAnswer = fullQuestionData[0].correctAnswer.id;
var questionId = fullQuestionData[0].questionId;
 
function isCorrect(questionId, correctAnswer, userAnswer){
  if (correctAnswer === userAnswer){
    return true;
  } else return false;
}


(function getQuestion() {
  function doSetTimeout(i) {
    setTimeout(function () { console.log(fullQuestionData[i].question) }, i * 2000);
  }
  for (let i = 0; i < fullQuestionData.length; i++) {
    doSetTimeout(i);
  }
})()





it("compares correctAnswer and userAnswer", function(){
  userAnswer = fullQuestionData[0].answers[1].id;
  expect(isCorrect(1, correctAnswer, userAnswer)).toBe(false);
  userAnswer = fullQuestionData[0].answers[0].id;
  expect(isCorrect(1, correctAnswer, userAnswer)).toBe(true);
  userAnswer = fullQuestionData[2].answers[1].id;
  expect(isCorrect(3, correctAnswer, userAnswer)).toBe(false);

});
});
