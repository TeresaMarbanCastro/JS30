'use strict'

const inventors = [
    {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
    {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
    {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
    {first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
    {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
    {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543},
    {first: 'Max', last: 'Planck', year: 1858, passed: 1947}
]; 

const people = [
    'Beck, Glenn',
    'Becker, Carl',
    'Beckett, Samuel',
    'Beddoes, Mick', 
    'Beecher, Henry',
    'Beethoven, Ludwig',
    'Begin, Menachem',
    'Belloc, Hilaire',
    'Bellow, Saul',
    'Benchley, Robert',
    'Benenson, Peter', 
    'Ben-Gurion, David',
    'Benjamin, Walter',
    'Benn, Tony',
    'Bennington, Chester', 
    'Benson, Leana',
    'Bent, Silas',
    'Bentsen, Lloyd',
    'Berger, Ric',
    'Bergman, Ingmar',
    'Berio, Luciano',
    'Berle, Milton',
    'Berlin, Irving',
    'Berne, Eric',
    'Bernard, Sandra',
    'Berra, Yogi',
    'Berry, Halle',
    'Berry, Wendell',
    'Bethera, Erin',
    'Bevan, Aneurin',
    'Bevel, Ken',
    'Biden, Joseph',
    'Bierce, Ambrose',
    'Biko, Steve',
    'Billings, Josh',
    'Biondo, Frank',
    'Birrell, Augustine',
    'Black, Elk',
    'Blair Robert',
    'Blair, Tony',
    'Blake, Williams'
];

//1.FILTER the list of inventors for those who were born in the 1500's

//1.1 Nice and easy way
// const fifteen = inventors.filter(function(inventor){
//     if (inventor.year >= 1500 && inventor.year <=1599){
//         return true;
//     } else{
//         return false;
//     }

// console.table(fifteen);

//1.2 Clean way
// const fifteen = inventors.filter(inventor =>{
//     if (inventor.year >= 1500 && inventor.year <=1599){
//         return true;
//     } else{
//         return false;
//     }
// })

// console.table(fifteen);

//1.3 Cleaner way
const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year <=1599);
console.table(fifteen);

// //2 MAP always gives you back the same array of items. 
//     //Get list of first and last names
const names = inventors.map(inventor => inventor.first + ' ' + inventor.last);
console.table(names);
    //You could also do ...=> ${inventor.first} ${inventor.last}  to avoid typing the space. 

//3. SORT the inventors by birthdate from oldest to youngest
    //3.1 Easy way
// const oldest = inventors.sort(function (a,b){
// if (a.year > b.year){
//     return 1;
// } if (a.year < b.year){
//     return -1;
// } else return 0;
// })
// console.log(oldest);

//3.2 Cleaner way
const oldest = inventors.sort((a,b)=> a.year > b.year ? 1 : -1);
console.log(oldest);

// //4. REDUCE - How many years did the all inventors live?
const totalAge = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0); //Zero here to add total (0) to inventor
console.log(totalAge);

// //5. SORT inventors by years lived
const yearsLived = inventors.sort((a,b) => (a.passed - a.year) > (b.passed - b.year)? -1 : 1);
console.log(yearsLived);

//6. Create a list of Boulevards in Paris that contain 'de' anywhere in the name
//from https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a')); //Create an array
// const de = links.map(link => link.textContent).filter(streetName => streetName.includes('de'));


//7. SORT people alphabetically by last name
const alphabeticallyOrdered = people.sort(function(lastPerson, nextPerson){
    const parts = lastPerson.split(', '); //to get an array
    console.log(parts);
const [last, first] = lastPerson.split(', '); //to get variables with both
console.log(last, first);
const [alast, afirst] = lastPerson.split(', '); //to get variables with both
const [blast, bfirst] = nextPerson.split(', ');
return alast > blast ? 1 : -1;
});
console.log(alphabeticallyOrdered);

//8. REDUCE exercise: Sum up the instances of each of these:
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
const instances = data.reduce(function(obj, item){
   if(!obj[item]){
    obj[item]= 0;
   }
   obj[item]++
   return obj;
}, {});
console.log(instances);
