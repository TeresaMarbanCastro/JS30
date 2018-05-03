describe("scoreboard", function(){
  function recalculateScore(points, isCorrect, time){
    if (isCorrect && time <= 2){
      return points + 2;
    }else if (isCorrect && (time > 2 && time <= 10)){
      return points +1;
    }else if (isCorrect && time > 10){
      return points;
    }else if (isCorrect == false && time <= 10){
      return points - 1;
    }else if (isCorrect == false && time >10){
      return points - 2;
    }
  }
  it("adds more points if guessed quickly (0-2] secs", function(){
    expect(recalculateScore(0, true, 2)).toBe(2);
    expect(recalculateScore(2, true, 1)).toBe(4);
  });
  it("adds fewer points if guessed slowly (2-10secs]", function(){
    expect(recalculateScore(1, true, 5)).toBe(2);
    expect(recalculateScore(3, true, 10)).toBe(4);
  });
  it("doesn't add any points if guessed after 10 secs]", function(){
    expect(recalculateScore(5, true, 11)).toBe(5);
  });
  it("subtracts fewer points if wrong before 10 secs", function(){
    expect(recalculateScore(5, false, 8)).toBe(4);
  });
  it("subtracts more points if wrong after 10 secs", function(){
    expect(recalculateScore(5, false, 18)).toBe(3);
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