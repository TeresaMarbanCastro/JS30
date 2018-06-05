'use strict';

var inputName = document.querySelector('.input__name');
var buttonSubmit = document.querySelector('.submit__button');
var buttonCreate = document.querySelector('.create__button');
var idCounter = 1;
var namesInJS = [];
var nameAndId = {
    name: inputName.value,
    id: idCounter
};
function updateNames(){
    nameAndId.name = inputName.value;
    nameAndId.id = idCounter++;
    var firebaseRef = firebase.database().ref('names');
    firebaseRef.push().set(nameAndId);
    console.log(namesInJS);
    namesInJS.push(nameAndId.name);
    console.log(namesInJS);
    }
buttonSubmit.addEventListener('click', updateNames);

var listado = namesInJS;
function getRandomNames(){

    listado = listado.sort(function(){ return Math.random() - 0.5});
    console.log(listado);
    printGroups();
    var total = listado.length;
    // for (var i = 0; i <= total; i++){
    //     var aleatorio = Math.floor(Math.random() * (listado.length));
    //     var seleccion = listado[aleatorio];
    //     console.log(listado);
    //     listado.splice(aleatorio, 1);
    // }
    // console.log(seleccion);
};

buttonCreate.addEventListener('click', getRandomNames);

var group1 = document.querySelector('.one');
var group2 = document.querySelector('.two');
var group3 = document.querySelector('.three');
var group4 = document.querySelector('.four');
var group5 = document.querySelector('.five');
function printGroups(){
    group1.innerHTML = 'Group 1 ' + listado[0] + ' ' + listado[1] + ' ' + listado[2];
    group2.innerHTML = 'Group 2 ' + listado[3] + ' ' + listado[4] + ' ' + listado[5];
    group3.innerHTML = 'Group 3 ' + listado[6] + ' ' + listado[7] + ' ' + listado[8];
    group4.innerHTML = 'Group 4 ' + listado[9] + ' ' + listado[10] + ' ' + listado[11];
    group5.innerHTML = 'Group 5 ' + listado[12] + ' ' + listado[13] + ' ' + listado[14];
}
