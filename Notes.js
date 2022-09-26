/*Array in JavaScript and its Methods */
const myarray = ["java", "cpp", "c", "javascript", "python"];
console.log(myarray);

myarray.push("php");            //Push() Method
console.log(myarray);

myarray.pop();                  // Pop() Method
console.log(myarray);

myarray.shift();                //Shift(): Removes first element of Array
console.log(myarray);

myarray.unshift("GoLang");      //Unshift(): Adds new element to the beginning of Array
console.log(myarray)

console.log(myarray[0]);        // Access Array Element

console.log(myarray);           // Splice() Method
myarray.splice(2,2);            // This will delete array from index [2] and delete 2 elements.
myarray.splice(2,2, "GoLang", "Android");    // This will insert and delete array from index [2] and also 2 elements.
console.log(myarray);

console.log(myarray);               // Slice() Method
const del = myarray.slice(2);       // This will slice 0,1 element from the array and store it inside del array.
const del = myarray.slice(1,3);     // This will slice array from 1 index and slice it to 3, but will not include 3 in it i.e it will slice elements at index[1,2] but not 3.
console.log(del);                   // This will display 3 Elements inside it
console.log(myarray);               // The original array will remain as it is, just another array is created.


/*Variables Types in JavaScript */

/*Let Variable in JS */
let x = "Hello World";
let y;      // We can declare var variable without initialization it.
console.log("The value of x Before the function is : " + x);
// let x = 10; //Let Variable Cannot be redeclare because it is blocked scope variable
function check(){
  let x = 10;
  console.log("The Value of x inside function is : "  + x);
}
check();
console.log("The value of x outside the function is : " + x);

/*Var Variable in JS */
var x = 20;
var y;      // We can declare var variable without initialization it.
console.log("Value of X outside the function is : " + x);
function check(){
  var x = 100;
  console.log("Value of X inside the function is : " + x);
  var x = 200;
  console.log("Value of X inside the function is : " + x);
}
check();
var x = 30  // Can Change Value of Var type Variable
console.log("Value of X outside the function is : " + x);

/*Const Variable in JavaScript */
const x = 10;
const x;        // We cannot declare const type variable without initialization it any value;
x = 10;           // We cannot assign any other value to a constant variable.
console.log("Value of X Before Function is : " + x);
function check(){
    const x = 20;
    console.log("Inside Function : " + x);
}
check();
console.log("Outside Function : " + x);

/*Variables Types in JavaScript End */

/*JavaScript Function */
let x = newfunction(4, 3); // Function is called, return value will end up in x

function newfunction(a, b) {
  return a * b; // Function returns the product of a and b
}
console.log(x);
