
// Logical Question  //


function func1() {
    setTimeout(() => {
        console.log(x);
        console.log(y);
    }, 3000);

    var x = 2;
    let y = 12;
}
func1()

    /************************************* */


    (function () {
        setTimeout(() => console.log(1), 2000);
        console.log(2);
        setTimeout(() => console.log(3), 0);
        console.log(4);
    })();

/**************************************** */


function func2() {
    for (var i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 2000);
    }
}
func2();


/*************************************** */


let x = {}, y = { name: "Ronny" }, z = { name: "John" };
x[y] = { name: "Vivek" };
x[z] = { name: "Akki" };
console.log(x[y]);

/************************************** */

function runFunc() {
    console.log("1" + 1);
    console.log("A" - 1);
    console.log(2 + "-2" + "2");
    console.log("Hello" - "World" + 78);
    console.log("Hello" + "78");
}
runFunc();

/***************************************** */

let a = 0;
let b = false;
console.log((a == b));
console.log((a === b));

/************************************* */
var x = 23;

(function () {
    var x = 43;
    (function random() {
        x++;
        console.log(x);  // NaN
        var x = 21;
    })();
})();

/*********************************** */

let hero = {
    powerLevel: 99,
    getPower() {
        return this.powerLevel;
    }
}

let getPower = hero.getPower;

let hero2 = { powerLevel: 42 };
console.log(getPower);  // undefined 
console.log(hero.getPower())
console.log(getPower.apply(hero2)); // 42


/*********************************** */

const a = function () {
    console.log(this);  // window Object

    const b = {
        name: "rahul",
        func1: function () {
            console.log(this.name);   // function 
        }
    }

    const c = {
        func2: () => {
            console.log(this);  // window Object
        }
    }

    b.func1();
    c.func2();
}

a();

/********************************************* */

const a = function () {
    console.log(this);  // window Object

    const b = {
        name: "rahul",
        func1: function () {
            console.log(this.name);   // rahul
        }
    }

    const c = {
        id: "1",
        func2: () => {
            console.log(this.id);  // undefined
        }
    }

    b.func1();
    c.func2();
}

a();

/************************************* */

const a = 'hellow'
console.log(a.substring(2, 4)) // ll
console.log(a.substr(2, 4)) // llow

/************************************ */

const arr = [1, 2, 3]
arr[100] = 99
console.log(arr.length) // 101 ( index=0, length=1)

/********************************************************** */

let a = 100

let b = c = d = z = a
console.log(b, c, d, z, a) // 100,100,100,100,100 ( left to right assign)

/******************************************************* */
const b = {
    name: "Vivek",
    f: function () {
        var self = this;
        console.log(this.name);
        (function () {
            console.log(this.name);
            console.log(self.name);
        })();
    }
}
b.f();

/*************************************************** */

(function (a) {
    return (function () {
        console.log(a);
        a = 23;
    })()
})(45);

/****************************************************** */

function rotateRight(arr, rotations) {
    if (rotations == 0) return arr;
    for (let i = 0; i < rotations; i++) {
        let element = arr.pop();
        arr.unshift(element);
    }
    return arr;
}
rotateRight([2, 3, 4, 5, 7], 3); // Return [4,5,7,2,3]
rotateRight([44, 1, 22, 111], 5); // Returns [111,44,1,22] 


/******************************************************** */

//  In JavaScript, how do you turn an Object into an Array []?

let obj = { id: "1", name: "user22", age: "26", work: "programmer" };

const arrOfObj = Object.entries(obj)
console.log(arrOfObj)

/********************************************************** */

const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < 10; i++) {
    setTimeout(() => console.log(b[i]), 1000);
}

for (var i = 0; i < 10; i++) {
    setTimeout(() => console.log(b[i]), 1000);
}

for (var i = 0; i < 9; i++) {
    setTimeout(() => console.log(b[i]), 1000);
}

/******************************************** */
const user = [
    { id: 1, fname: "rahul", lname: "choudhary" },
    { id: 2, fname: "kunal", lname: "rokhle" },
    { id: 3, fname: "dipesh", lname: "igle" },
    { id: 4, fname: "prince", lname: "kushwah" },
    { id: 5, fname: "alok", lname: "choursiya" },
    { id: 6, fname: "khushboo", lname: "patel" },
    { id: 7, fname: "Ankit", lname: "Gadewal" },
];
const comments = [
    {
        id: 1, text: {

            facebook: "",
            twitter: "hello",
            instagram: ["hello1", "hello2", "hello3"]
        }
    },
    { id: 2, text: "nice job" },
    { id: 3, text: "Cool ,thanks" },
    { id: 4, text: "nice job bro" },
    { id: 5, text: "well done" },

]
const data = []
user.map((item) => {
    comments.map((i) => {
        if (item.id == i.id) {
            if (typeof i.text == "object") {
                console.log(typeof i.text)
                 data.push({ ...item,allComments=[i.text] })
                 return
            }

            data.push({ ...item, ...i })
        }
    })
})
console.log(data)

/*******************************************************************************
