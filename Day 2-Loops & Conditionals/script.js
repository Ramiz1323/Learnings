/*

for (let i = 0; i <= 10; i++) {
        console.log(i);
    }

for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

for (let i = 10; i > 0; i--) {
    console.log(i);
}

for (let i = 1; i <= 5 ; i++) {
    console.log(`Yes! Count:${i}`);
}

for (let i = 1; i <= 10; i++) {
    // console.log(i);
    if (i%2 === 0) {
        console.log(`${i} --> even`);
    } else {
        console.log(`${i} --> odd`);
    }
}

let num = +prompt("Enter a number: ");
if (num >0) {
    console.log("It's a positive number");
} else {
    console.log("It's a negative number");
}

for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5*i}`);
}

let age = prompt("Enter your age: ");

if (age == null) {
  console.error("User cancelled the prompt");
} else {
  if (age.trim() === "") {
    console.error("Age cannot be empty");
  } else {
    if (isNaN(age)) {
      console.error("Please enter a valid number for age");
    } else {
      if (age >= 18) {
        console.log("You are eligible to vote");
      } else {
        console.log("You are not eligible to vote");
      }
    }
  }
}

let count = 0;
for (let i = 1; i <= 15; i++) {
  if(i>8){
    count++;
  }
}
console.log(`Count: ${count}`);

let password = prompt("Enter your password: ");

if (password === null) {
  console.error("User cancelled the prompt");
} else {
  if (password === "admin") {
    console.log("Welcome to your dashboard");
  } else {
    console.error("Wrong password");
  }
}

let i = 1;
while (i<=10) {
  console.log(i);
  i++;
}

let main = "admin";

let pass = prompt("Enter your password: ");
let maxAttempts = 4;
let minAttempts = 1;
maxAttempts--;

while (pass !== main) {
  maxAttempts--;
  pass = prompt(`Try Again!! ${maxAttempts} attempts left: `);
  if (minAttempts === maxAttempts && pass !== main) {
    console.error("Maximum attempts reached. Your account is locked.");
    break;
  }
}

let word = prompt("Enter a word(in lowercase): ");
word = word.toLowerCase();
let stop = "stop";
let yes = "yes";
let count = 0;

while (word !== stop) {;
  console.log(word);
  word = prompt("Enter a word(in lowercase): ");
  if (word === yes) {
    count++;
  }
  if (word === stop) {
    console.log(`Terminated....`);
  }
}
console.log(`The word 'yes' was entered ${count} times.`);

*/


