/** 
 Sync function :- It means that code will run in particular sequence of instructions
        given in the program.Each instruction waits for the previous instruction to 
        complete its execution.


 Async function :-  It simply allows us to write promises-based code as if it was 
         synchronous and it checks that we are not breaking the execution thread.

 
Promises :- This lets asynchronous methods return values like synchronous methods
        instead of immediately returning the final value, the asynchronous method returns
        a promise to supply the value at some point in the future. 

*/

let a = 30;
let b = 20;

let result = a + b;

async function getData() {
    let resultFromServer = await fetch(
        <link/>
    );
    console.log(await resultFromServer.json());
}

getData();
console.log(result);


// We have another method also to write same code but not preferred coz not clean.
/** 
fetch(<link/>).then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
});
console.log(result); 
  */