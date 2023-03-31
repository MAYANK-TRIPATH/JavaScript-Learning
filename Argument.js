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