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
const obj = {
    name: "John",
    age: 30
};

//Functions
const myFunction = function() {
    console.log("Hello World");
}


//BigInt
console.log(typeof bigNumber);

//bigint, because it is a primitive data type in JavaScript  



//Array , Object , Function are all of type object in JavaScript, because they are all reference data types.

//******************************************************************************************************************************************


let myYoutubename ="ZaidUllah"

let anothername = myYoutubename
 anothername = "ZaidUllah123"
console.log(anothername);

//In the above code, we have assigned the value of myYoutubename to anothername. Since strings are primitive data types, anothername will hold a copy of the value of myYoutubename. Therefore, if we change the value of myYoutubename, it will not affect anothername.

let userOne ={
    email: "user@example.com",
    upi: "user@upi"
}

let userTwo = userOne

userTwo.email= "zaidullah@gmail.com"

console.log(userOne.email); //In the above code, we have assigned the value of userOne to userTwo. Since objects are reference data types, userTwo will hold a reference to the same object in memory as userOne. Therefore, if we change the value of userTwo.email, it will also change the value of userOne.email, because both variables are referencing the same object in memory.     
console.log(userTwo.email); //In the above code, we have assigned the value of userOne to userTwo. Since objects are reference data types, userTwo will hold a reference to the same object in memory as userOne. Therefore, if we change the value of userTwo.email, it will also change the value of userOne.email, because both variables are referencing the same object in memory. 

