/** A closure is the combination of a function bundled together (enclosed) with reference 
  to its surrounding state. In other words, a closures gives you access to an open function's
  scope from an inner function.  
*/

function main() {
    const name = "Mayank";
    
    function Myname() {
        console.log(name);

    }
    Myname();
}

main();

// Another example
function main(name) {
    function sayMyName() {
        console.log(name);
    }
    return sayMyName;
}

let consoleMayank = main("Mayank");

console.log(consoleMayank);


//Add number example

function adder(num) {
    function add(b) {
        console.log(num + b) 
    }
     return add;        
    }

    const addTo5 = adder(5);
    const addTo10 = adder(10);

    addTo5(2);
    addTo10(10);