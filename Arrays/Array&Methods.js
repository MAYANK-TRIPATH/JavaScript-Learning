/*  Arrays:- In JS array can store different type of data. 
1. Adding new elements
2. Finding elements
3. Removing elements
4. Splittihng elements
5. Combining elements   
*/

// Creating a Array
let numbers = [1,3,6,8];
console.log(numbers);


                               // Insertion  
// 1. At the End
numbers.push(9);


// 2. At beginihng
numbers.unshift(8);

// 3. In middle
numbers.splice(2,0,'a','b');


                         // Searching 
console.log(numbers);

console.log(numbers.indexOf(9));

// We want to checkif a number exist in an array
if(numbers.indexOf(4) != -1)
console.log("present");                    // It will give output accoding to the print statement

// 2nd method
console.log(numbers.includes(7));

// Callback function:- A function is call within function which will do a task.

let courses =[
    {no:1, naam:'Mayank'},
    {no:2, naam:'tripathi'}
];

let course  = courses.find(function(course) {
    return course.naam === 'Mayank';
})
console.log(course);


                        // Arrow Function
let course = courses.find(course => course.naam === 'Mayank');
console.log(course);                        

           

                          // Removing Elements      1:08:05

   //     Same as Insertion                1. pop()     2. shift()    3. splice()


        

                    //    combining and slicing Arrays
 // combining
 let first = [1,2,3];
 let second = [4,5,6];
 
 let combined = first.concat(second);
 console.log(combined); 

 // slicing
 let marks = [10,20,30,40,50,60];
 let sliced = marks.slice(2,6);
 console.log(sliced);


 //        Iterating an array

 let arr = [10,20,30,40, 50];

 for(let value of arr) {
    console.log(value);
 }

 // by using .forEach

 arr.forEach(function(number) {
    console.lo(number);
 });


 //    Filtering Array

 let numbers = [1,2,-1,-4]; 

  let filtered  = numbers.filter(function(value) {
    return value >= 0;
  });
  
  
  //     Mapping Arrays :- Maps each element of array to something else.

  let numbers = [7,8,9,10];
  console.log(numbers);

  let items = numbers.map(function(value) {
    return 'student_no' + value;
  })
  console.log(items);