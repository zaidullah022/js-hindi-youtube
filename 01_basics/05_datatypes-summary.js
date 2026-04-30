//Primitive

//7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

//Non-primitive : Object

//String
let name = "John"
console.log(typeof name);

//Number
let age = 30
console.log(typeof age);

//Boolean
let isLoggedIn = true
console.log(typeof isLoggedIn);

//Null
let nullValue = null
console.log(typeof nullValue); //this is a bug in js, it should return null but it returns object

//Undefined
let undefinedValue;
console.log(typeof undefinedValue);

//Symbol
let sym1 = Symbol("sym1")
console.log(typeof sym1);

//BigInt
let bigIntValue = BigInt(1234567890123456789012345678901234567890)
console.log(typeof bigIntValue);                        




//Refrence data type (Non primitive)

//Object
let person = {
    name : "John",
    age : 30
}
console.log(typeof person);

//Array
let arr = [1,2,3,4,5]
console.log(typeof arr);
    




//
const id = Symbol('123')// you can see  both the values of the id are same but they are not equal because each symbol is unique
const anotherID = Symbol('123')

console.log(id === anotherID); //false, because each symbol is unique


//Array
const heros = ['Superman', 'Batman', 'Wonder'];
console.log(typeof heros); //object, because arrays are objects in JavaScript           


//Object
  {
    name: "John",
    age: 30
};


//Functions
const myFunction = function() {
    console.log("Hello World");
}


//BigInt
console.log(typeof bigNumber);

const bigNumber = 1234567890123456789012345678901234567890n



//Array , Object , Function are all of type object in JavaScript, because they are all reference data types.

