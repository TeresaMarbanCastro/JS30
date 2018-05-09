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
let buttonStart = document.querySelector('.start__button');

//1. PRINT QUESTION and ANSWERS and CHECK USER SELECTION WITH QUESTION ID

(function(){
    let i = 0;
    let placeQuestion = document.querySelector('.question-answer__container');

    placeQuestion.innerHTML = `Pulsa el botón para comenzar`;

     function printQuestion(){
        if(i < fullQuestionData.length){
          placeQuestion.innerHTML = 
          ` <h3 class="question__class" id="${fullQuestionData[i].questionId}">${fullQuestionData[i].questionId} ${fullQuestionData[i].question}</h3>`
          for (const answers of fullQuestionData[i].answers) {
            placeQuestion.innerHTML += 
                `<label for="${answers.id}">${answers.value}</label>
                <input id="${answers.id}" type="radio" value="${answers.value}" name="options" class="input__class" />
                `    
          }
        i++;
      }
    };

    function checkAnswer(){
      let options = document.querySelectorAll('.input__class');
      let questionTitleID =  document.querySelector('.question__class').id;
      // var found = fullQuestionData.find(function(i) {
      //   if (question.id == i) {
      //      return correctAnswer;
      //   }
      // });
      for (let i = 0; i < options.length; i++){
        if (options[i].checked){
          let selectedAnswerID = options[i].id;
          if(selectedAnswerID === questionTitleID){
            alert('Acertaste');

          }else {
            alert('Fallaste')
          }
        }
  
      }
    }

    buttonQuestion.addEventListener('click', checkAnswer);
    buttonQuestion.addEventListener('click', printQuestion);



    
  //SCOREBOARD
  buttonStart.addEventListener('click', startScoreboard);

    let placeData = document.querySelector('.scoreboard__data');

    placeData.innerHTML = 'Aquí se registrarán tus resultados';

  function startScoreboard(){
    placeData.innerHTML = 'Teresa' + '' + 0;
    printQuestion();
    hideStart();
  };

  function  hideStart(){
    buttonStart.classList.add('hide');
    buttonQuestion.classList.remove('hide');
  };

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
})();