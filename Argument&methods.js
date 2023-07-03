/*                          Arguments 
* Functions that accepts inputs.

*/

function greet(person) {
    console.log(`Hi, ${person}`);
}
greet('Arya');


   //It will Repeat given Argument
function repeat(str, numTimes) {
    let result = '';
    for(let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}

// Quiz ques
function isSnakeEyes(num1, num2) {
    if(num1 == 1 && num2 == 1) {
        console.log("Snake Eyes!");
    }
    else {
        console.log("Not Snake Eyes!")
    }
}
isSnakeEyes();

//           Return keyword
function add(x, y) {
    return x + y;
}

//            Methods

// 1. FOREACH:- Accepts a callback function.Calls the function once per element
//             in the array.
const nums =  [9,8,7,6,5,4,3,2,1];

nums.forEach(function (n) {
    console.log(n *n)
});

nums.forEach(function (el) {
    if (el % 2 === 0) {
        console.log(el)
     }
})

// 2. MAP :- Creates a new array with the result of calling a callback on
//     every element in the array.

const  number  = [1,2,3,4,5];

const double = number.map(function (num) {
    return num * 2;
})

//           Arrow function :-
const square = (x) => {
    return x * x;
}

const sum = (x, y) => {
    return x + y;
} 

const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1
}