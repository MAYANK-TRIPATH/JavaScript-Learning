// Arrow function

// 1. Synatax
const sayHi = () => {
    console.log("hi");
};

const add = (a,b) => {
    return a+b;
}

// if have only one expression to pass
const add = (a, b) => a + b;   // one liner

// 2. arguments keyword is not allowed
const addNum = (...nums) => {
    console.log(nums);
};

addNum(10, 22, 20, 26);