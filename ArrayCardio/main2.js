'use strict'

const people = [
    {name: 'Wes', year: 1988},
    {name: 'Kait', year: 1986}, 
    {name: 'Irv', year: 1970},
    {name: 'Lux', year: 2015}
];

const comments = [
    {text: 'Love this!', id: 523423},
    {text: 'Super good', id: 823423},
    {text: 'Your are the best', id: 2039842},
    {text: 'Ramen in my fav food ever', id: 123523},
    {text: 'Nice Nice Nice!', id: 542328}
];

//SOME : is at LEAST one person  19?
//1. starightforward way: 
// const nineteen = people.some(function(person){
//     const currentYear = (new Date()).getFullYear();
//     if(currentYear - person.year >= 19){
//         return true;
//     }
// })
// console.log(nineteen)

//1.2 Shorter way
// const nineteen = people.some(person => {
//     const currentYear = (new Date()).getFullYear();
//     return currentYear - person.year >= 19
// });
// console.log(nineteen)

//1.3 Even Shorter
const nineteen = people.some(person =>  ((new Date()).
    getFullYear()) - person.year >= 19);
console.log({nineteen});

//2. EVERY : all are over 19
const allOverNineteen = people.every(person =>  ((new Date()).
    getFullYear()) - person.year >= 19);
console.log({allOverNineteen});

//3. FIND: like filter, but instead, just returns what we are looking for
//          find the comment with the ID of 823423
//   3.1 Straightforward way
// const comment = comments.find(function(comment){
//     if(comment.id === 823423){
//         return true;
//     }
// });
// console.log(comment);
//3.2 Shorter way
// const comment = comments.find(comment => comment.id === 823423);
// console.log(comment);

//4. FindIndex : to find and delete the comment with ID 823423
const index = comments.findIndex(comment => comment.id === 823423);
console.log(index);

//Witj splice
// comments.splice(index, 1);
// console.log(comments)

//with slice the spread (...) aren't really necessary here
const newComments = [
...comments.slice(0, index),
...comments.slice(index + 1)
];
console.table(comments);