(function(){
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
  let placeData = document.querySelector('.scoreboard__data');
  let placeQuestion = document.querySelector('.question-answer__container');
  let timer = document.querySelector('.seconds');
  let seconds = 0;
  let points = 0;
  placeQuestion.innerHTML = `Pulsa el botón para comenzar`;
  placeData.innerHTML = 'Aquí se registrarán tus resultados';

//1. START FUNCTIONS
  buttonStart.addEventListener('click', startScoreboard);

  function startScoreboard(){
    placeData.innerHTML = 'Teresa' + ' ' + points;
    printQuestion();
    hideStart();
    startTimer();
  };

  function  hideStart(){
    buttonStart.classList.add('hide');
    buttonQuestion.classList.remove('hide');
  };

//2. PRINT QUESTION and ANSWERS and CHECK USER SELECTION WITH QUESTION ID
 let i = 0;


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
          points += 1;
          placeData.innerHTML = 'Teresa' + ' ' + points;
        }else {
          alert('Fallaste');
          points -= 1;
          placeData.innerHTML = 'Teresa' + ' ' + points;
        }
        seconds = 0;
      }
    }
  }

  buttonQuestion.addEventListener('click', checkAnswer);
  buttonQuestion.addEventListener('click', printQuestion);
  // buttonQuestion.addEventListener('click', restartTimer);


  //3. TIMER  
  function startTimer(){
    function onGoingTimer(){
     if (seconds > 19){
       seconds = 0;
       printQuestion();
       } else {
       seconds += 1;
      timer.innerHTML = seconds;
     }
    };
   setInterval(onGoingTimer,1000);
  };

  //SCOREBOARD
 
  function recalculateCorrectScore(points, seconds){
    if (seconds <= 2){
      return points + 2;
    } if (seconds > 2 && time <= 10){
      return points + 1;
    } if (seconds > 10){
      return points;
    } 
  };
  recalculateCorrectScore();
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