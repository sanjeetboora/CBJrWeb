//comparison operator

let a = 3;
let b = 3;

console.log(a > b); //greater than //false
console.log(a < b); //smaller than //true
console.log(a == b); //equal //false

b = 10; //assignment 

// >=  greater than or equal
console.log("a >= b", a >= b);//false
// <=  smaller than or equal
console.log("a <= b", a <= b); //true

console.log("3 is not equals to 3", 3 != 3);


console.log("Zoya > Samyank : ","Zoya" > "Samyank");//true
console.log("A > B", "A" > "B");//false
console.log("Bee > Be", "Bee" > "Be");

console.log("2 > 1 : ", "2" > 1); //compare string and number //true

//string  >  number, => string 2 will become a number 2
//then 2 as a number > 1 as a number

console.log("true == 1", true == 1); //true
console.log("false == 1", false == 1); //false

let xNumber = 0;
console.log("Boolean type of xNumber : ", Boolean(xNumber)); //false

let xstring = "0";
console.log("Boolean type of xstring : ", Boolean(xstring));//true

console.log("xNumber == xstring : ", xNumber == xstring); //true

//strict equality check ===
console.log("0 == false", 0 == false); //true
console.log("0 === false", 0 === false);

