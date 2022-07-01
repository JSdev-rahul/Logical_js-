function sayHi() {
    return 1
}

console.log(typeof sayHi());  // number

/*************************************** */
function sayHi2() {
    return "hellow"
}

console.log(typeof sayHi2());  // string
/*********************************** */

function sayHi4() {

}

console.log(typeof sayHi4());  // undefined

/*********************************** */
function sayHi3() {
    return (() => "j")();
}

console.log(typeof sayHi3()); // string

/********************************** */

(function () {
    console.log("1")
    console.log(typeof this)
    console.log(this)
})()

/************************************ */
console.log(typeof typeof 1);

// Explanation —typeof 1 returns "number". And typeof "number" returns string

const a = typeof 1
console.log(typeof a)

/***************************************** */


!!null;
!!'';
!!1;


// Answer — false false true
// Explanation —null is falsy. !null returns true. !true returns false.

// "" is falsy. !"" returns true. !true returns false.

// 1 is truthy. !1 returns false. !false returns true.

/************************************ */

function sum() {
    return arguments.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3)); // error arguments.reduce is not a function

// Explanation
//1. Arguments are not fully functional array, they have only one method length.
//Other methods cannot be used on them.

/****************************************** */

function data() {
    console.log(arguments)  // {0:5,1:6,2:3}
    console.log(typeof arguments)  // object
    console.log(arguments.length)  // 3
    console.log(arguments[0]) // 5
}
data(5, 6, 3)

/***************************************** */

function sumData(...arguments) {  // rest operator crete argumnet ka array 
    return arguments.reduce((a, b) => a + b); // 6
}

console.log(sumData(1, 2, 3))

/******************************************* */

console.log(1 == '1');
console.log(false == '0');
console.log(true == '1');
console.log('1' == '01');
console.log(10 == 5 + 5);

//   true true true false true.

/*************************************** */

console.log('1' - - '1');  // 2
console.log('1' + - '1');  //"1-1"
console.log('-5' - - '1');  // -4
console.log('5' - - '1');  // 6


// Explanation
// 1. With type coercion string is converted to number and are treated as 1 - -1 = 2.
// 2.+ operator is used for concatenation of strings in javascript, so it is evaluated as '1' + '-1' = 1-1.


/***************************************** */


let lang = 'javascript';
(function () {
    let lang = 'java'; // let have block scope
})();
console.log(lang);  // javascript
(function () {
    var lang2 = 'java';
})();

console.log(lang2);  // error

/************************************ */

(function () {
    console.log(typeof this);  // object
}).call(10);

/************************************** */
(function () {
    console.log(typeof this);  // object
})(10);

/*-************************************/
(function () {
    console.log(typeof this);  // object
})("hellow");


/************************************* */

const obj = { a: 'one', b: 'two', a: 'three' };
console.log(obj);

/*************************************** */

let a = 3;
let b = new Number(3);
let c = 3;
console.log(a == b);
console.log(a === b);
console.log(b === c);


/**************************************** */
function getAge(...args) {
    console.log(typeof args); // object 
    console.log(Array.isArray(args)) // true
}

getAge(21);
/************************************* */


function checkAge(data) {
    if (data === { age: 18 }) {
        console.log('You are an adult!');
    } else if (data == { age: 18 }) {
        console.log('You are still an adult.');
    } else {
        console.log(`Hmm.. You don't have an age I guess`); // outPut
    }
}

checkAge({ age: 18 });

/* Explanation —When testing equality, primitives are compared by their value, while objects are compared by their reference. JavaScript checks if the objects have a reference to the same location in memory.

The two objects that we are comparing don’t have that: the object we passed as a parameter refers to a different location in memory than the object we used in order to check equality.

This is why both { age: 18 } === { age: 18 } and { age: 18 } == { age: 18 } return false. */


/************************************************** */

const obj = { 1: 'a', 2: 'b', 3: 'c' };
const set = new Set([1, 2, 3, 4, 5]);

obj.hasOwnProperty('1'); // true
obj.hasOwnProperty(1); // true
set.has('1'); // false
set.has(1); // true

/*Explanation —All object keys (excluding Symbols) are strings under the hood, even if you don’t type it yourself as a string. This is why obj.hasOwnProperty('1') also returns true.

It doesn’t work that way for a set. There is no '1' in our set: set.has('1') returns false. It has the numeric type 1, set.has(1) returns true. */

/**************************************************** */


const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 123;
a[c] = 456;

console.log(a[b]);  // 456

/************************************************** */

const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);

/************************************************* */
let person = { name: 'Ayush' };
const members = [person];
person = null;

console.log(members); // Object
console.log(person)  // null
