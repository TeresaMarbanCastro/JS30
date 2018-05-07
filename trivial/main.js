'use strict'
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
//1. PRINT QUESTION and ANSWERS
(function(){
    let i = 0;
    let placeQuestion = document.querySelector('.question-answer__container');
    let buttonQuestion = document.querySelector('.check__button');
  
     function getQuestion(){
      if(i < fullQuestionData.length){
        placeQuestion.innerHTML = 
        ` <h3>${fullQuestionData[i].question}</h3>`
        for (const answers of fullQuestionData[i].answers) {
            // let j = 0;
            placeQuestion.innerHTML += 
                `<label for="${answers.value}">${answers.value}</label>
                <input id="${answers.value}" type="radio" name="options" />
                `
        }
        i++;
      }
    };
    buttonQuestion.addEventListener('click', getQuestion);
})();

// function paintQuestions() {
//     if (i < questionsWithAnswers.length) {
       
//         for (const answers of questionsWithAnswers[i].answers) {
//             questionsList.innerHTML += (
//                 `<input type="radio" id=${answers.answerDescritpion} name="answer" value="answer">
//                 <label for=${answers.answerDescritpion}>${answers.answerDescritpion}</label>`
//             );
//         }
//         i++;
//     }
// }


 //CHECK ANSWER
 var correctAnswer = fullQuestionData[0].correctAnswer.id;
 var questionId = fullQuestionData[0].questionId;

 function isCorrect(questionId, correctAnswer, userAnswer){
   if (correctAnswer === userAnswer){
     return true;
   } else return false;
 }

  //SCOREBOARD
  function recalculateCorrectScore(points, time){
    if (time <= 2){
      return points + 2;
    } if (time > 2 && time <= 10){
      return points + 1;
    } if (time > 10){
      return points;
    } 
  }
  function recalculateFailedScore(points, time){
      if( time <= 10){
        return points - 1;
      } if ( time > 10){
        return points -2;
      } 
  }
  function recalculateBlankScore(points){
      return points -3;
  }
  