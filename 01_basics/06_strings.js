const name = "Zaid"
const repoCount = 50

console.log(name +repoCount +" Value");


console.log(`hello  my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hiteshhc')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length); 
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
   
const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString)


const newStringOne = "   zaid     "  
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://www.youtube.com/channel/UCWv7vMbMWH4-V0ZXdmDpPBA"
console.log(url.replace("https://www.youtube.com/channel/","ZaidChannel/"));

console.log(url.includes('youtube'))
console.log(url.includes('ZaidChannel'))

console.log(gameName.split('t'  ));