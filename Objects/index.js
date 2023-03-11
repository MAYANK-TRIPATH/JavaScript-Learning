//  Objects  :-  It has behaviour and properties

// object creation
let rectangle = {
    length: 3,
    // Its Properties
    breadt: 54,

    Art: function () {                      // these are methods
        console.log('drawing square');
    }
};                           // if we want to call multiple fxn we have to call multiple time.


// To deal with problem we use Factory and construction fxn. 

// Object Can be created by * FACTORY FUNCTION and * CONSTRUCTION FUNCTION.

// Factory Function

function createSquare(length, breadth) {

    return square = {
        length,
        breadth,

        draw() {
            console.log('drawing square');
        }
    };
}

let squareObj1 = createSquare(3,6);   // just call like this fxn.


// Constructor function -> Its a prop/method that intilise /Define the function.
// its uses Pascal Notation -> Every first letter of the word is Capital.

function Rectangle() {
    this.length = 1;
    this.breadth = 2;
    this.draw = function() {
        console.log('drawing');
    }
}

                   // object creation using constructor function
let rectangleObject = new Rectangle ();


                     // Dynamic nature -> We can dynamically delete and Add items 

rectangleObject.color = 'yellow';
console.log(rectangleobject);               // Adding

delete rectangleObject.color;
console.log(rectangleObject);              // Deleting


                                // Note :
//      * Primitive are  copied by their value.
//      * Reference are copied by their address/ reference.     
//      * functions are objects.     

// Question :-  Make clone of
let src = {
    a: 10,
    b: 20, 
    c: 30                      // make its clone
}

for(let key in src){
    dest[key] = src[key];            // this will clone the above 
}
 
console.log(dest);
// output will be 
//  a -> 10
//  b -> 20
//  c -> 30


// 2nd method to clone it    --> We can use assign method

let dest = object.assign({}, src);