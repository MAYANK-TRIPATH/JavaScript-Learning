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

 // SCOPE :- "Visibility" where we have access to taht variable.

    function helpMe() {
      let msg = "I am on fire";
 
      msg;
    }
    msg; // msg is scoped to the helpMe function

    //      Bird is scoped to birdwatch function
    let bird = 'duck';
    function birdwatch () {
      let bird = 'golden pheaseant';
      bird;
    }
    bird;


// Lexical scope :- defining function inside other function.

function bankRob() {
   const heroes = ['Spiderman', 'IronMan', 'Thor'];
   function cryFor(){
      function inner () {
         for (let hero of heroes) {
            console.log(`PLEASE HELP US, ${hero.toUpperCase}`);
         }
      }
      inner();
   } 
   cryFor();
}

//           function expression

const add = function (x,y) {
   return x + y;
}

/*       Higher order function 
Function that operate on/with other functions.
They can :
Accept other functions as arguments
Return a function
*/

function callTwice(func) {
   func();
   func();
}
function callTenTimes(f){
   for (let i = 0; i<10; i++) {
      f()
   }
}

function rollDie() {
   const roll = Math.floor(Math.random() * 6) + 1
   console.log(roll)
}