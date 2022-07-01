// const person = {
//     name: 'Ayush',
//     age: 21,
// };

// for (const item in person) {
//     console.log(item);  // keys
//     console.log(person[item]);   // values
// }

/*************************************************** */

// const arr= [10,20,30,40]

// for(var j in arr)
// {
//     console.log(j)  // index 
//     console.log(arr[j])  // values
// }

/**************************************************** */

// const obj={
//     id:'1'
// }
// for(var j in obj)
// {
//     console.log(j)
//     console.log(obj[j])
// }

/************************************************** */

// const arr=[10,20,60,70,80]
// for(var k of arr)
// {
//     console.log(k)
// }

/*********************************************** */

console.log([1, 2, 3].map(num => {
    if (typeof num === 'number') return num * 2;
    return num * 2;
}))

/*************************************** */

console.log([1, 2, 3].map(num => {
    if (typeof num === 'number') return;
    return num * 2;
}))

/*************************************************** */


var obj = { a: 1 };
var secondObj = obj;
secondObj.a = 2;
console.log(obj);

console.log(secondObj);

var obj = { a: 1 };
var secondObj = obj;
secondObj = { a: 2 };

console.log(obj);
console.log(secondObj);




/*Explanation —
1. If the object property is changed, then the new object is pointing to the same memory address, so the original object property will also change. ( call by reference )
2. If the object is reassigned with a new object then it is allocated to a new memory location, i.e it will be a real copy (call by value).*/

/*************************************************** */


const arrTest = [10, 20, 30, 40, 50][1, 3];
console.log(arrTest); // 40 


/* Explanation —The last element from the second array is used as the index to get the value from first array like arrTest[3]. */

/********************************************************** */



console.log([] + []);
console.log([1] + []);
console.log([1] + "abc");
console.log([1, 2, 3] + [1, 3, 4]);
console.log("" + "")
console.log({} + {})

/* Answer —
1. ""
2. "1"
3. "1abc"
2. "1,2,31,3,4"
Explanation —
1. An empty array is while printing in console.log is treated as Array.toString(), so it prints an empty string.
2. An empty array when printed in console.log is treated as Array.toString() and so it is basically “1” + “” = "".
3. “1” + “abc” = "1abc".
4.“1, 2, 3” + “1, 3, 4” = "1,2,31,3,4".

 */

/********************************************************* */


var a = 3;
var b = {
    a: 9,
    b: ++a
};
console.log(a + b.a + ++b.b);

/************************************************ */


const arr = [1, 2, undefined, NaN, null, false, true, "", 'abc', 3];
console.log(arr.filter(Boolean)); // gave Truthy values

const arr = [1, 2, undefined, NaN, null, false, true, "", 'abc', 3];
console.log(arr.filter(!Boolean));  // error


/*Explanation —
1. Array.filter() returns the array which matches the condition. As we have passed Boolean it returned all the truthy value.
2. As Array.filter() accepts a function, !Boolean returns false which is not a function so it throws an error Uncaught TypeError: false is not a function.   */

/************************************************ */


const person = {
    name: 'Ayush Verma',
    .25e2: 25
};

console.log(person[25]);
console.log(person[.25e2]);
console.log(person['.25e2']);
console.log(person["name"]);
console.log(person.name)

/* Answer — 25 25 undefined
Explanation —While assign the key the object evaluates the numerical expression so it becomes person[.25e2] = person[25]. Thus while accessing when we use 25 and .25e2 it returns the value but for '.25e2' is undefined.*/


/*************************************************** */


console.log(new Array(3).toString());
/*  Answer — “,,”
Explanation —Array.toString() creates string of the array with comma separated values. */


/*************************************************** */

let obj = {
    x: 2,
    getX: function () {
        setTimeout(() => console.log('a'), 0);
        new Promise(res => res(1)).then(v => console.log(v));
        setTimeout(() => console.log('b'), 0);
    }
}
obj.getX();

/* Explanation —When a macrotask is completed, all other microtasks are executed in turn first, and then the next macrotask is executed.

Mircotasks include: MutationObserver, Promise.then() and Promise.catch(), other techniques based on Promise such as the fetch API, V8 garbage collection process, process.nextTick() in node environment.

Marcotasks include initial script, setTimeout, setInterval, setImmediate, I/O, UI rendering.

An immediately resolved promise is processed faster than an immediate timer because of the event loop priorities dequeuing jobs from the job queue (which stores the fulfilled promises’ callbacks) over the tasks from the task queue (which stores timed out setTimeout() callbacks). */


/******************************************************* */


const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
};
console.log(shape.diameter());  //  20
console.log(shape.perimeter()); //  NaN


/******************************************************* */


function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const ayush = new Person('Ayush', 'Verma');
const sarah = Person('Sarah', 'Smith');

console.log(ayush);
console.log(sarah) // undefined ( new keyword nhi lagaya)



/*Answer — Person {firstName: "Ayush", lastName: "Verma"} and undefined
Explanation —For sarah, we didn't use the new keyword. When using new, this refers to the new empty object we create. However, if you don't add new, this refers to the global object!

We said that this.firstName equals "Sarah" and this.lastName equals "Smith". What we actually did, is defining global.firstName = 'Sarah' and global.lastName = 'Smith'. sarah itself is left undefined, since we don't return a value from the Person function.

 */

/************************************* */


const person = { name: 'Ayush' };

function sayHi(age) {
    return `${this.name} is ${age}`;
}

console.log(sayHi.call(person, 21));
console.log(sayHi.bind(person, 21)); // ye function return karta hai 
const data = sayHi.bind(person, 21)
console.log(data())

/*Answer — Ayush is 21 function
Explanation —With both, we can pass the object to which we want the this keyword to refer. However, .call is also executed immediately!

.bind. returns a copy of the function, but with a bound context! It is not executed immediately. */


/******************************************************************* */


let obj = {
    x: 2,
    getX: function () {
        console.log(this.x);
    }
}
obj.getX(); (1)


let x = 5;
let obj = {
    x: 2,
    getX: () => {
        console.log(this.x)
    }
}
obj.getX(); (2)


let x = 5;
let obj = {
    x: 2,
    getX: function () {
        let x = 10;
        console.log(this.x);
    }
}
obj.getX()
let y = obj.getX;
y(); (3)


/*********************************************** */


let a = 10, b = 20;
setTimeout(function () {
    console.log('Ayush');
    a++;
    b++;
    console.log(a + b);
});
console.log(a + b);

/*********************************************** */
