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

