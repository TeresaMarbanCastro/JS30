'use strict'
const fullQuestionData = [
    {
      questionId: 1,
      question: '¿Cuál es la capital de Zambia?',
      answers: [
        {id: 1, value: 'Lusaka'},
        {id: 2, value: 'Madrid'},
        {id: 3, value: 'Harare'}
      ],
      correctAnswer: {id: 1}
    },
  
    {
      questionId: 2,
      question: '¿Cuántos años tiene Celio?',
      answers: [
        {id: 1, value: 18},
        {id: 2, value: 'No lo sabe ni ella'},
        {id: 3, value: 103}
      ],
      correctAnswer: { id: 2 }
    },
    {
      questionId: 3,
      question: '¿Cuál es el nombre de Freud?',
      answers: [
        {id: 1, value: 'Adolf'},
        {id: 2, value: 'Sefarad'},
        {id: 3, value: 'Sigmund'}
      ],
      correctAnswer: {id: 3}
    }
  ];
  let buttonQuestion = document.querySelector('.check__button');
  let checkedValue = '';
//1. PRINT QUESTION and ANSWERS
// (function(){
    let i = 0;
    let placeQuestion = document.querySelector('.question-answer__container');
    // let buttonQuestion = document.querySelector('.check__button');

    placeQuestion.innerHTML = `Pulsa el botón para comenzar`;

     function getQuestion(){
      if(i < fullQuestionData.length){
        placeQuestion.innerHTML = 
        ` <h3>${fullQuestionData[i].question}</h3>`
        for (const answers of fullQuestionData[i].answers) {
            placeQuestion.innerHTML += 
                `<label for="${answers.id}">${answers.value}</label>
                <input id="${answers.id}" type="radio" value="${answers.value}" name="options" class="input__class" />
                `    
        }
        i++;
      }
    };
  let selectedAnswer = '';
    function getSelectedAnswer(){
      let radios = document.querySelectorAll('.input__class');
      // console.log(radios);
      for (let i = 0; i < radios.length; i++){
        // console.log(radios[i].checked);
         selectedAnswer = radios[i];
        if (selectedAnswer.checked === true){
        console.log(selectedAnswer.id);
        } 
      }
    }
    let correctAnswer = '';

    function checkAnswer(selectedAnswer, correctAnswer){
      for (let j = 0; j < fullQuestionData.length; j++) {
        correctAnswer = fullQuestionData[j].correctAnswer;
           console.log(correctAnswer.id);
      }
    }
    buttonQuestion.addEventListener('click', getSelectedAnswer);
    buttonQuestion.addEventListener('click', checkAnswer);
    buttonQuestion.addEventListener('click', getQuestion);
    

// })();
    
 //CHECK ANSWER

//  let correctAnswer = fullQuestionData[0].correctAnswer.id;
//  let questionId = fullQuestionData[0].questionId;
// //  let selectedAnswer = input.checked;

//  function checkAnswer(questionId, correctAnswer, selectedAnswer){
//      choices = document.getElementsByName("options");
//      for(let j = 0; j < choices.length; j++){
//          if(choices[j].checked){
//              choice = choices[j].value;
//          }
//      }
//      questionId = 0;
//    if (correctAnswer === selectedAnswer){
//      return true;
//    } else return false;
//  }
//  buttonQuestion.addEventListener('click', checkAnswer);




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
  