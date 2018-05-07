describe("The scoreboard", function(){
  // const questions = [
  //   {title: '¿Cuántos años tiene Celio?', answer: {a: '35', b: 'No lo sabe ni ella', c: '25' }, correctAnswer: 'b'},
  //   {title: '¿Cuál es la capital de Zambia?', answer: {a: 'Lusaka', b: 'Harare', c: 'Madrid' }, correctAnswer: 'a'},
  //   {title: '¿Cuál es el nombre completo de Freud?', answer: {a: 'Adolf', b: 'Sefarad', c: 'Sigmund' }, correctAnswer: 'c'},
  //   {title: '¿Cuál es el animal más rápido del mundo?', answer: {a: 'Guepardo', b: 'León', c:'Tortuga' }, correctAnswer: 'a'}
  // ]
  let question = function(){
    title: '¿Cuál es la capital de Zambia?'
  }
  

let answer = {
  answerCorrect: 'Lusaka',
  incorrectAnswers: ['Harare', 'Madrid']
}//Este objeto me sirve sólo para pintar las respuestas, después tendré que crear otra forma para que me guarde el selectedAnswer

  function doesUserKnowTheAnswer(answerCorrect, selectedAnswer){
    if(answerCorrect == selectedAnswer){
      return true;
    } else {
      return false;   
     }
  }

  it("compares the correct answer with the selected one", function(){
    expect(doesUserKnowTheAnswer('Lusaka', 'Lusaka')).toBe(true);
    expect(doesUserKnowTheAnswer('Lusaka', 'Madrid')).toBe(false);
  });

const fullQuestionData = {
    id: 1,
    question: '¿Cuál es la capital de Zambia?',
    answers: [
      {id: 1, value: 'Lusaka'},
      {id: 2, value: 'Madrid'},
      {id: 1, value: 'Harare'}
    ],
    correctAnswer: {id: 1},
    questionId: 1, id: 1
  };
 
function isCorrect(fullQuestionData){
  
};
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

  it("adds more points if guessed quickly (0-2] secs", function(){
    expect(recalculateCorrectScore(0, 2)).toBe(2);
    expect(recalculateCorrectScore(2, 1)).toBe(4);
  });
  it("adds fewer points if guessed slowly (2-10secs]", function(){
    expect(recalculateCorrectScore(1, 5)).toBe(2);
    expect(recalculateCorrectScore(3, 10)).toBe(4);
  });
  it("doesn't add any points if guessed after 10 secs]", function(){
    expect(recalculateCorrectScore(5, 11)).toBe(5);
  });
  it("subtracts fewer points if wrong before 10 secs", function(){
    expect(recalculateFailedScore(5, 8)).toBe(4);
  });
  it("subtracts more points if wrong after 10 secs", function(){
    expect(recalculateFailedScore(5, 18)).toBe(3);
  });
  it("subtracts more points if left blank", function(){
    expect(recalculateBlankScore(5, 22)).toBe(2);
  });
  xit("pushes next question after 20 sec", function(){
    expect(recalculateScore(5)).toBe(2);
  });

});

/* TO DO - list
*
*   velocidad de respuesta, acierto o fallo,

*ACERTANDO
*      Si acierto pregunta en menos de 2 segundos - sumo 2 puntos
*          (0 puntos, pregunta correcta, 1 segundo) -> 2 puntos
*          (1 punto, correcta, 1 segundo) -> 3 puntos
*      Si acierto pregunta entre 2 y 10 segundos - sumo 1 punto
            (1 punto, correcta, 5 segundos) -> 2 puntos
*      Si acierto y tardo mas de 10 segundos - 0 puntos
*FALLANDO
*      Si fallo antes de 10 segundos - resto 1 punto
*      Si fallo pregunta en mas de 10 segundos - resto 2 puntos


*      No se puede pasar sin responder
*      Si en 20 segundos no has respondido , pasa a siguiente pregunta y pierdes 3 punto
*
*
* */

 // function getNextQuestion(questions){
  //   for (var i = 0; i <= questions.length; i++) {
  //     console.log(questions[1].title);
  //     wait();
  //     function delayNextQuestion(questions){
  //       timeoutID = window.setTimeout(wait, 2100);
  //     }
  //   }
    // console.log(questions[i].title)
  // }

//   var timeoutID;
// function delayedAlert() {
//   timeoutID = window.setTimeout(slowAlert, 2000);
// }
// function slowAlert() {
//   alert("That was really slow!");
// }
// function clearAlert() {
//   window.clearTimeout(timeoutID);
// }




  //We are trying to avoid PRIMITIVES as parameters
  // function recalculateScore(points, hasAnswered, isCorrect, time){
  //   if (hasAnswered, isCorrect && time <= 2){
  //     return points + 2;
  //   }else if (hasAnswered && isCorrect && (time > 2 && time <= 10)){
  //     return points +1;
  //   }else if (hasAnswered && isCorrect && time > 10){
  //     return points;
    // }else if (hasAnswered && isCorrect == false && time <= 10){
    //   return points - 1;
    // }else if (hasAnswered && isCorrect == false && time >10){
    //   return points - 2;
  //   }else if (hasAnswered == false && time > 20){
  //     return points - 3;
  //   }
  // }