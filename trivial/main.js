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
//1. PRINT QUESTION and ANSWERS
// (function(){
    let i = 0;
    let placeQuestion = document.querySelector('.question-answer__container');
    // let buttonQuestion = document.querySelector('.check__button');

    placeQuestion.innerHTML = `Pulsa el botón para comenzar`;

     function printQuestion(){
        if(i < fullQuestionData.length){
          placeQuestion.innerHTML = 
          ` <h3 class="question__class" id="${fullQuestionData[i].questionId}">${fullQuestionData[i].question}${fullQuestionData[i].questionId}</h3>`
          for (const answers of fullQuestionData[i].answers) {
            placeQuestion.innerHTML += 
                `<label for="${answers.id}">${answers.value}</label>
                <input id="${answers.id}" type="radio" value="${answers.value}" name="options" class="input__class" />
                `    
          }
        i++;
      }
    };


    function getSelectedAnswer(){
      let radios = document.querySelectorAll('.input__class');
      let questionTitleID =  document.querySelector('.question__class').id;
      console.log(questionTitleID);
      for (let i = 0; i < radios.length; i++){
        if (radios[i].checked){
          let selectedAnswerID = radios[i].id;
          console.log(selectedAnswerID);
          if(selectedAnswerID === questionTitleID){
            console.log('bien');
          }
        }
  
      }
    }

    
    buttonQuestion.addEventListener('click', getSelectedAnswer);
    // buttonQuestion.addEventListener('click', checkAnswer);
    buttonQuestion.addEventListener('click', printQuestion);
    

// })();
    
  //SCOREBOARD
  function recalculateCorrectScore(points, time){
    if (time <= 2){
      return points + 2;
    } if (time > 2 && time <= 10){
      return points + 1;
    } if (time > 10){
      return points;
    } 
  };
  function recalculateFailedScore(points, time){
      if( time <= 10){
        return points - 1;
      } if ( time > 10){
        return points -2;
      } 
  };
  function recalculateBlankScore(points){
      return points -3;
  };
  