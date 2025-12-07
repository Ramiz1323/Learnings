/*
function sayHello() {
    console.log("Hello, JavaScript!");
}
sayHello();

function add(a, b) {
    return a + b;
}

console.log(`Sum: ${add(5, 10)}`);

function Default(name = "guest") {
    console.log(`Hello, ${name}`);
}

Default("guest");

function addUnlimited(...numbers){
    let sum = 0;
    for(let number of numbers){
        sum += number;
    }
    return sum;
}

console.log(`Sum: ${addUnlimited(1,2,3,4,5,6,7,8,9,10)}`);

(function(){
    console.log("I run instantly");
})();

function parent() {
    let a = 10;
    function child(){
        console.log(`Value of a is: ${a}`);
    }
    child();
}
parent();

let fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];
console.log("Firstly:")
console.log(fruits);

fruits.push("Grapes"); // Add an element at the end
console.log("After Push:");
console.log(fruits);

fruits.pop(); // Removes last element
console.log("After Pop:");
console.log(fruits);

fruits.shift(); // Removes first element
console.log("After Shift:");
console.log(fruits);

let fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple", "Grapes", "Strawberry", "Watermelon"];
for(let fruit of fruits){
    console.log(fruit);
}

let obj = {
    name: "Ramiz",
    age : 20,
    city : "Kolkata"
}
for (let key in obj){
    console.log(obj[key]);
}

setTimeout(()=>{
    console.log("This message is shown after 2 seconds");
}, 2000);

function runTwice(fn) {
  fn();
  fn();
}
runTwice(function () {
  console.log("I run twice");
});

function pure(a,b) {
    console.log(a+b);
};
pure(2,3);

let global = 0;
function impure(a) {
    global++;
    console.log(a+global);
};
impure(3);
impure(3);
impure(3);
impure(3);

function aTOz({name, roll}) {
    console.log(`Name: ${name}, Roll: ${roll}`);
}
aTOz({
    name: "Ramiz",
    roll : 108
})

let obj = {
    name: "Ramiz" , 
    age : 19,
    fn: function something() {
        console.log(this);
    },
    fn2: () => {
        console.log(this);
    }
}
obj.fn();
obj.fn2();

let arr = [1,2,3,4,5];
MappingArray = arr.map(function (element) {
    return element * element;
});
console.log("Mapped Array:");
console.log(MappingArray);

let arr = [1,2,3,4,5];
filtered = arr.filter(function (element) {
    return element % 2 === 0;
});
console.log(filtered);

let salary = [1000, 2000, 3000, 4000, 5000];
let NetSalary = salary.reduce(function (acc, val) {
    return acc + val;
})

console.log(`Total Salary: ${NetSalary}`);

let names = ["Ram", "Aya", "Raju", "Sohan", "Mintu", "Kamal", "Rat", "Arif", "Jamal"];
let filterNames = names.some(function (val) {
    return val.length <= 3;
})
console.log(`Are there any names with length greater than or equal to 3?   ${filterNames}`);

let names = ["Ram", "Aya", "Raju", "Sohan", "Mintu", "Kamal", "Rat", "Arif", "Jamal"];
let filterNames = names.every(function (val) {
    return val.length <= 3;
})

console.log(`Are there any names with length greater than or equal to 3?   ${filterNames}`);

let user = {
    name: "Ramiz",
    age: 20,
    city: "Kolkata",
    username: "ramiz123",
    password: "xyz@123"
};

user.social = "Instagram";

Object.seal(user); //Can't add or delete properties but can modify existing properties
user.age = 21;

Object.freeze(user); //Can't add, delete or modify properties
user.city = "Delhi";

console.log(user);

let obj = {
    user:{
        name: "Ramiz",
        address:{
            city: {
                name: "Kolkata",
            }
        }
    }
};

let Test = obj.user.address.city.name;
console.log(Test);

*/

