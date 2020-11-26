let message = "Hi Kushagra!";
//alert(message);

message = 123456;
//alert(message);

//Data Types
//1. String
let name = "Akshansh";
// alert(name);

console.log(name);
console.log(message);

let user = 'Atul';
console.log(user);

// alert(`Hi, ${name}`);
// alert(`Hello, ${user}`);
//alert(`Hello, ${1+2}`);
//alert("Hello, ${1+2}");

//2. Numbers
let num = 10;
console.log(num);
num = 10.789;
console.log(num);

num =  10/5;
console.log(num);
num =  10.67/5;
console.log(num);
num = 10/0;
console.log(num);
num = -10/0;
console.log(num);

num = "Hi this is a user"/2;
console.log(num); //NaN -> Not a Number

let val = 5;
console.log(val);

//3. BigInt

let x = 900567892798379475938750930984098204098320974307472380333n;

//4. Boolean

let isGreater = 4>5;
console.log(isGreater);
let isSmaller = 4 < 5;
console.log(isSmaller);

//5. null
let age = null;

//6. undefined
let y;

console.log("typeof name = ", typeof name, " - ", name);
console.log("typeof message = ", typeof message, " - ", message);
console.log("typeof val = ", typeof val, " - ", val);
console.log("typeof num = ", typeof num, " - ", num);
console.log("typeof x = ", typeof x, " - ", x);
console.log("typeof age = ", typeof age, " - ", age);
console.log("typeof isGreater = ", typeof isGreater, " - ", isGreater);
console.log("typeof y = ", typeof y, " - ", y);

console.log("typeof name = ", typeof(name), " - ", name);


//Ways to interact with your browser
//alert(name);
age = prompt("How old are you");
console.log(age);

age = prompt("How old are you", 100);
console.log(age);

let isBoss = confirm("Are you the boss of the company?");
alert(isBoss);