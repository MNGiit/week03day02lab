// A. Q + A
/*
1. How do we assign a value to a variable? A: use the equal symbol. variable should be to the left of the symbol and the value to the right
2. How do we change the value of a variable? A: Same way we assign a value to a varaible
3. How do we assign an existing variable to a new variable? A: Same way we assign a value to a variable, this time put the variable with the valuable to the right
4. Remind me, what are declare, assign, and define? A: Declare sets up the variable first time, assign gives a value to a variable, and define is assigning something to it
5. What is pseudocoding and why should you do it? A: It's like creating a list of instructions to do and you should do it to plan out or have an idea what the code should do
6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it? A: I think a big percentage is just thinking about it, while the code is just the process in digital form. But I also think it's ok to think, write some test code to see if that part works, think again.
*/

// B. Strings
let firstVariable;
firstVariable = "Hello World";
firstVariable = 100;
let secondVariable = firstVariable;
secondVariable = "Something";
// 6. What is teh value of firstVariable? A: It should still be 100.
let yourName = "Mohammed Noori";
let str = "Hello, my name is: ";
concatStr = (str1, str2) => {
    return str1 + str2;
}
console.log(concatStr(str, yourName));

// C. Booleans
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false && false && false && false && false || true);
console.log(false === false)
console.log(e === 'Kevin');
console.log(a <= b !== c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a == a != d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');

// D. The farm
let animal = "cow";
if(animal === "cow") console.log("mooooo");
else console.log("Hey! You're not a cow.");

// E. Driver's Ed
let age = 25;
if(age >= 16) console.log("Here are the keys!");
else console.log("Sorry, you're too young.");


// II. Loops
// A. The basics
for(let i = 0; i <= 10; i++) console.log(i);

for(let i = 0; i<= 400; i++) if(i>=10) console.log(i);

for(let i = 0; i<= 4000; i++) if(i>=12 && i%3 === 0) console.log(i);

// B. Get even
for(let i = 1; i <= 100; i++) if(i%2 === 0) console.log(i, "<-- is an even number");

// C. Give me Five
for(let i = 0; i<= 100; i++) {
    if(i!=0){
        if(i%3 === 0) console.log(`I found a ${i}. Three is a crowd`);
        if(i%5 === 0 && i != 0) console.log(`I found a ${i}. High five!`);
    }
    
}
