// reps.js

// declare a variable
var name = 'Bob';
// var this is a variable with the name 'Name' and a value of 'James'

typeof name
// what am i? A STRING

// declare 3 new variables

var petName = 'Leeloo';
var carMake = 'Kia';
var faveFood = 'Irish';

// log all three
console.log(petName);
console.log(carMake);
console.log(faveFood);

// numerics

var pi = 3.14;
var age = 30;
var faveNumber = 42;

typeof pi;
typeof age;
typeof faveNumber;

//boolean

var isHangry = true;
var isOverTwentyOne = true;
var isCool = true;

typeof isHangry;

// arrays of things

var friends = ['Blossom', 'Bubbles', 'Buttercup'];
var pets = ['TiTi', 'Leeloo', 'Ruby'];

Array.isArray(friends);
// use this because typrof array === 'object'

// loop through all items in array

pets.forEach(function(pet)) {
	console.log(pet);
}

// create elements

var list = document.createElement('ul');
var p = document.createElement('p');
var article = document.createElement('article');
var item = document.createElement('li');

console.log(item);

// finally ....IF / ELSE

if (isOverTwentyOne) {
	console.log('gimme booze!');
} else {
	console.log('womp womp');
}

if (20 >21) {
	console.log('u have beer den');
} else {
	console.log('no beer for you');
}