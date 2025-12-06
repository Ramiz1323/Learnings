// Arithmetic Operators
let a = 10
let b = 3
console.log(`Initial-> a: ${a}, b: ${b}`)

console.log("Addition: " + (a + b))
console.log(`Substraction: ${a - b}`)
console.log("Multiplication: " + (a * b))
console.log(`Division: ${a / b}`)
console.log("Modulus: " + (a % b))
console.log(`Exponentiation: ${a ** b}`)

// Assignment Operators   
let x = 5
console.log(`Initial-> x: ${x}`)
x += 3 
console.log(`x after += 3: ${x}`)
x -= 3 
console.log(`x after -= 3: ${x}`)
x *= 3
console.log(`x after *= 3: ${x}`)
x /= 3
console.log(`x after /= 3: ${x}`)

// increment and Decrement Operators
let count = 5
console.log(`Initial-> count: ${count}`)
count++
console.log(`count after increment: ${count}`)
count--
console.log(`count after decrement: ${count}`)

// Comparison Operators
5 == "5" // true
5 === "5" // false
5 != "5" // false
5 !== "5" // true

if(10 > 5){
    console.log("10 is greater than 5")
}
if(10 < 20){
    console.log("10 is less than 20")
}
if(10 == 10){
    console.log("10 is equal to 10")
}

//logical Operators
true && false // false
true || false // true
!true // false

//If Else Statement
let age = 17
if(age >= 18){
    console.log("Adult")
}else{
    console.log("Minor")
}

//Ternary Operator
let score = 40;
let result = (score >= 50) ? "Pass" : "Fail";
console.log(`Result: ${result}`)

temp = 26
let Temperature = (temp > 30) ? "Hot" : "Pleasant"
console.log(`Temperature is: ${Temperature}`)

//Switch Statement
let day = 1
switch(day){
    default:
        console.log("Invalid Day")
        break;
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
}