function application() {
  'use strict'
  const fullQuestionData = [
    {
      questionId: 1,
      question: '¿Cuál es la capital de Zambia?',
      answers: [
        { id: 1, value: 'Lusaka' },
        { id: 2, value: 'Madrid' },
        { id: 3, value: 'Harare' }
      ],
      correctAnswer: { id: 1 }
    },

    {
      questionId: 2,
      question: '¿Cuántos años tiene Celio?',
      answers: [
        { id: 1, value: 18 },
        { id: 2, value: 'No lo sabe ni ella' },
        { id: 3, value: 103 }
      ],
      correctAnswer: { id: 2 }
    },
    {
      questionId: 3,
      question: '¿Cuál es el nombre de Freud?',
      answers: [
        { id: 1, value: 'Adolf' },
        { id: 2, value: 'Sefarad' },
        { id: 3, value: 'Sigmund' }
      ],
      correctAnswer: { id: 3 }
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

  function startScoreboard() {
    buttonQuestion.disabled = true;
    placeData.innerHTML = 'Teresa' + ' ' + points;
    printQuestion();
    hideStartButton();
    startTimer();
    checkEnableNextQuestionButton();
  };

  function hideStartButton() {
    buttonStart.classList.add('hide');
    buttonQuestion.classList.remove('hide');
  };


  //2. PRINT QUESTION and ANSWERS and CHECK USER SELECTION WITH QUESTION ID
  let i = 0;
  function printQuestion() {
    if (i < fullQuestionData.length) {
      placeQuestion.innerHTML =
        ` <h3 class="question__class" id="${fullQuestionData[i].questionId}">${fullQuestionData[i].questionId} ${fullQuestionData[i].question}</h3>`
      for (const answers of fullQuestionData[i].answers) {
        placeQuestion.innerHTML +=
          `<label for="${answers.id}">${answers.value}</label>
           <input id="${answers.id}" type="radio" value="${answers.value}" name="options" class="input__class" required />
           `
      }
      i++;
    }
    // enableGLobalCheck();
  };

  function checkAnswer() {
    let questionTitleID = document.querySelector('.question__class').id;
    let options = document.querySelectorAll('.input__class');
    for (let i = 0; i < options.length; i++) {
      if (options[i].checked) {
        let selectedAnswerID = options[i].id;
        if (selectedAnswerID === questionTitleID) {
          alert('Acertaste');
          recalculateCorrectScore();
        } else {
          alert('Fallaste');
          recalculateFailedScore();
        }
        seconds = 0;
      }
    }
  }

  buttonQuestion.addEventListener('click', checkAnswer);
  buttonQuestion.addEventListener('click', printQuestion);

  //3. ENABLE AND DISABLE BUTTONS SO THAT USER CANNOT SKIP QUESTIONS

  // function enableGlobalCheck(){
  //   function enableCheck(){
  //     let options = document.querySelectorAll('.input__class');
  //     let optionChecked = false;
  //     for (let i = 0; i < options.length; i++){
  //       if (options[i].checked){
  //         optionChecked = true;
  //       } 
  //     }
  //       if (optionChecked){
  //         buttonQuestion.disabled = false;
  //       }
  //   };
  //   setInterval(enableCheck,1000);
  // };
function checkEnableNextQuestionButton(){
  function enableNextQuestionButton(){
    let options = document.querySelectorAll('.input__class');
      if ((options[0].checked)||(options[1].checked)||(options[2].checked)) {
        buttonQuestion.disabled = false;
      }  
      else {
        buttonQuestion.disabled = true;
      } 
  }
  setInterval(enableNextQuestionButton,1000)
}
  //4. TIMER  
  function startTimer() {
    function onGoingTimer() {
      if (seconds > 19) {
        seconds = 0;
        recalculateBlankScore();
        printQuestion();
      } else {
        seconds += 1;
        timer.innerHTML = seconds;
      }
    };
    setInterval(onGoingTimer, 1000);
  };


  //5. SCOREBOARD

  function recalculateCorrectScore() {
    if (seconds <= 2) {
      points += 2;
      placeData.innerHTML = 'Teresa' + ' ' + points;
      console.log('correcta en menos de 2');
    } else if (seconds > 2 && seconds <= 10) {
      points += 1;
      placeData.innerHTML = 'Teresa' + ' ' + points;
      console.log('correcta en menos de 10');
    } else if (seconds > 10) {
      console.log('correcta en más de 10');
    }
  };

  function recalculateFailedScore() {
    if (seconds <= 10) {
      points -= 1;
      placeData.innerHTML = 'Teresa' + ' ' + points;
      console.log('fallaste en menos de 10');
    } else if (seconds > 10 && seconds < 20) {
      points -= 2;
      placeData.innerHTML = 'Teresa' + ' ' + points;
      console.log('fallaste en más de 10');
    } else if (seconds >= 20) {
      points -= 3;
      placeData.innerHTML = 'Teresa' + ' ' + points;
      console.log('left blank');
    }
  };

  function recalculateBlankScore() {
    points -= 3;
    placeData.innerHTML = 'Teresa' + ' ' + points;
    console.log('left blank');
  }

  return {
    start: function(){}
  }

};

//Kill timer
//Stats

//find
//Interfaz

      // var found = fullQuestionData.find(function(i) {
      //   if (question.id == i) {
      //      return correctAnswer;
      //   }
      // });


