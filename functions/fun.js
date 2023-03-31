 //     function declaration

 function run() {
    console.log('running');
 }
 run();


 // function assignment

 let stand = function walk() {
    console.log('walking');
 };

 stand();

 // creating a dynamic function that adds(sum)  parameters.

 function sum() {
    let total = 0;
    for(let value of arguments)
    total = total + value;
    return total;
 }
 
 let ans = sum(1,3,4,5);
 console.log(ans);