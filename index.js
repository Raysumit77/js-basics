/*const number1 = prompt("enter first number");
const number2 = prompt("enter second number");
if(!isNaN(number1) && !isNaN(number2)){
    alert(`sum = ${number1 + number2}`);
}else{
    alert("please enter valid number");
}
//type conversion/type casting
 const userNum = Number(prompt("what is your num"));
 const usertrueNum = Number(userNum);
 const userstring = string(userTrueNum);
 //const Number1 = Number(prompt("Enter first number"));
 //ternary operator (ES6)
 *condition ? true:false */
 //userName === password
 //? alert(`welcome ${userName}`)
 //:alert("imvalid un or pw");
//const month = prompt("enter the month");
//month === "jan" ? alert("jan") : month === "feb" ? alert("feb") : alert("march");
 
//const year = prompt("enter the year");
//year === "2004" ? alert("2004") : year === "2006" ? alert("2006")  : year === ("2009");

//const userName = prompt("enter name");
//const time = Number(prompt("enter time"));
//time >=5 && time <=12 
//? alert(`morning ${name}`) 
//:time >=1 && time < 3
//  ? alert(`afternoon ${name}`) 
// :alert (`evening ${name}`);
//write a multiplication 


//1 tp 10 print
//starting condition. stopping condition,running condition
//for(let = i = 1; i <= 10; i++){
//} while (k <= 10);
 
/*const t = 2
const i = 1
for(i=1; i<=10; i++){
    console.log(t+"*"+i+" = "+t*i);
}

const s = 3 
const a = 1
while(a <= 10){
    console.log(s+"*"+a+" = "+s*a);
    a++;
}

const w = 5 
const r = 1
do{
    console.log(w+"*"+w+" = "+w*r);
    r++;
}while(r <= 10);

const z = 2
const l = 1
while(l <= 10){
    console.log(l+"*"+l+" = "+z*l);
    l++;
}

const m = ("enter a number");
    if(s % 3 ===0 ||s % 7 ===0 )
{
   console.log("m")
   alert("true");
}
else{
    console.log("m")
    alert("false");
*/
//ES5
//function define 
/*function sum(a ,b){
    //logic
    return a + b;
}
const result = sum(2,2)
console.log(result);
 //ES6
 const sum =(a,b) => {
    return a + b;
 }
 //const result = sum(1 ,3)
 //console.log(result);

 write a function to do multiplication table of 2
 */
  /*function area (l ,b){
    return l*b;
  }
  const result = area(2,6)
console.log(result);

const multi = (table) => {
    let i = 2;
    do {
        console.log(table)
    }
}
*/
/*const reserve = (number) => {
    const str = string(number);
    let newNum = "";
    for (let i = str.length - 1; i >= 0; i--){
        newNum += str[i];
    }
    return newNum;
};
const res = Number(reverse(32243));
console.log({res});
*/
/*const output = (numbers) => {
    const str = string(number);
    let newNum = "";
    counter = 1
    for(let i = str.length - 1; i>= 0; i--){
        newNum += str[i];
        counter++;
    }
    do 
    }
    return newNum;

}
const output = number(output(10000));
console.log(output);


const coma

//write a js function that converts regular text to proper case
//eg "raktim shrestha" => Raktim Shrestha



//write a js function that converts long text to ... format

///write a js function that replace  c++ to MERN 
// eg "raktim is a  c++ teacher . he is  teaching us c++ course from 20th jan"
// eg "Rktim is a mern stack teacher . he is teaching us mern course from 20th jan"

const validEmail = (email) => {
    const str = String(email);

    
  
}
//closure

// write a js function that checks if the password is valid password or not vaidation rules are
//atleast 1 lowercase character
//atleast 1 uppercase character
//atleast 1 numer
//           symbol
//            length >= 8
//output true or false
*/

/*const isValidPassword = (password) => {
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const digitRegex = /\d/;
    const symbolRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
  
    const hasLowercase = lowercaseRegex.test(password);
    const hasUppercase = uppercaseRegex.test(password);
    const hasDigit = digitRegex.test(password);
    const hasSymbol = symbolRegex.test(password);
    const hasMinLength = password.length >= 8;
  
    return hasLowercase && hasUppercase && hasDigit && hasSymbol && hasMinLength;
  };
  
  // Example usage:
  const password1 = "Pass@word123";
  const password2 = "weakpass";
  
  console.log(isValidPassword(password1)); // Output: true
  console.log(isValidPassword(password2)); // Output: false
*/

// Function to check ipalindrome
/*const isPalindrome = (str) => {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Reverse the string
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    // Check if the original and reversed strings are the same
    return cleanedStr === reversedStr;
  };
  
  // Example usage:
  const exampleString = "A man, a plan, a canal, Panama!";
  console.log(isPalindrome(exampleString)); // Output: true

  //write a javascript program  to convert temperature to and frm celsius ,fahrenheit;
  //default temp should be celsius
  //formula : c/5 = (f - 32)/9 [where c = temperature in celsius and f = temperature in frahrenheit]
   
   
   /* const convertTemperature = (temperature, toCelsius = true) => {
        if (toCelsius) {
          return fahrenheitToCelsius(temperature);
        } else {
          return celsiusToFahrenheit(temperature); 
  } 
  */

  //CRUD (create,read,update,delete)
  //const person = {
   /* name:"sumit yadav",
    birthyear: 2060,
    ismale: true,
    age: function () {
        return 2060 - person,birthyear;
    },
    calage: () => {
        return 2060 - person,birthyear;
    },
  };
  console.log({person});
   /*read
   //property
   console.log(person , name);
   //method
   console.log{person,age()};
   console.log{person,calage()};
   //update
   person.name = "Sumit Yadav";
   console.log({person});
   //delete
   delete person.name ;
   console.log({person});
create your own object for car ,laptop,tv and do crud operations
*/
  //CREATE
/*const object = {
    Car :"Thar",
    Laptop : "Predictor",
    Tv : "mi",
};
console.log({object});
//READ
//console.log(object,Car);
//UPDATE
object.laptop = "DELL";
console.log({object});
//DELETE
delete object. car;
console.log({object});

const obj ={
    name:"sumit",
    password:"4567",
    email:"ahsiray79@gmail.com",
};

//spread operator
const {password , ...rest} = obj; //object destructuring
console.log({rest});


const product = {
    name:"headphone",
    price:"83.7",
    discount:"7%",
}
 
//array sort method and sort the data in ascending order by age s
    const group = [
    {name:"raktim" , age:30},
    {name:"ruchi", age: 26},
    {name:"samundra" , age:26},
    {name:"sumit" , age:19},
];
group.sort((groupA, groupB) => groupA.age - groupB.age);
console.log(group);

// Sample array of person objects
const persons = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 },
  ];    
  persons.sort((personA, personB) => personA.age - personB.age);
  console.log(persons);
   //write a js function that creates slug
  //eg:understanding nestjs architecture
  //=>understanding-nestjs-architecture
  const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join('-'));

//write a javascript function that checks if the user has acess or not.
  //return boolean value
  const userRole = ["user" , "vender"];
  const sysRole = ["admin" , "vender"];
  const checkRole = (ur , sr) => sr.some((role) => ur.includes(role));
  console.log(checkRole(userRole , sysRole));
 

  // write a js function taht create a sum of number from 1 to 10 
  //eg [1,2,3,4,5,6,7,8,9,10]

  const sumNumber = [1,2,3,4,5,6,7,8,9,10];
  const initialValue = 0;
const sumWithInitial = sumNumber.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);
console.log(sumWithInitial);
    

  //let snacks = ['noodle' , 'pasta' , 'ice-cream'];
  //let snacks = ['fries , 'ice-cream' , 'pizza']
  //let commonSnacks = snacks1.filter(snacksItem => snacks2.includes(snacksItem));
  //console.log(commonSnacks)
  

 
 //write a js function that works as a pagination 
//  function paginateArray(array, itemsPerPage, currentPage) {
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     const paginatedItems = array.slice(startIndex, endIndex);
    
//     return paginatedItems;
// }

// const myArray = ["sumit", "raktim", "samundra", "ruchi", "sanima"];
// const itemsPerPage = 2;
// const currentPage = 4;

// const result = paginateArray(myArray, itemsPerPage, currentPage);
// console.log(result); 

//immutable javascript
//Map,filter,reduce ,every ,some

//write a js fuction that checks username and password in the database and check if the password match or not 
//return booolean
/*const db = [
    { username:"raktim" , password:"pass1"}
    { username:"sumit" , password:"pass2"} 
    { username:"ruchi" , password:"pass3"}
    { username:"kuber" , password:"pass4"}
    { username:"sam" , password:"pass5"}
    
];
const check = (db) =>sr.some((role) => ur.includes(role));
/console.log(checkRole(userRole , sysRole));
 Simulating a database with user information
*/
//  const db = [
//     { username: 'user1', password: 'pass1' },
//     { username: 'user2', password: 'pass2' },
   
//   ];
  
//   function checkCredentials(username, password) {
    
//     const user = database.find(u => u.username === username);
  
    
//     const isValid = user && user.password === password;
  
//     return [isValid, user];
//   }
  

//   const [isCredentialsValid, user] = checkCredentials('user1', 'pass1');
  
//   if (isCredentialsValid) {
//     console.log('Login successful for user:', user.username);
//   } else {
//     console.log('Invalid username or password');
//   }
  
//   const database = [
//     { username: 'raktim', password: 'pass1' },
//     { username: 'kuber', password: 'pass2' },
    
//   ];
  
//   function findUserByKey(key, value) {
//     for(let i=0;i<=database.length;i++){

//         const user = database.find(k => k[key].includes(value));
  
//     return user || null;
//   }
// }
 
//   const usernameToSearch = 'k';
//   const foundUser = findUserByKey('username', usernameToSearch);
  
//   if (foundUser) {
//     console.log('User found:', foundUser);
//   } else {
//     console.log('User not found');
//   }
  
  
/*ISO string , UTC string ,  time string
  const now  = new Date();
  const year = now.toUTCString();
  const month = now.toISOString();
  const day = now.toTimeString();
  console.log({year , month , day});

  //CRUD (craete , read , update , delete )

  //create 
   const student = {
    name : "sumit",
    birthyear : "2060",
    isMale : "true",
    age:function () {
        return new date().getfullyear() - this.birthyear:
    }
   }

   //read
   console.log(student.name);
   console.log(teacher.age());
   
   //update 

student.name = "Sumit Yadav"

//delete

delete student.age;
console.log { studemnt };

//spread operator

const user = {
    user:"sumit"
    password : "pass1234"
    role : "student"
    craetedAt: new date().toISOString(),
};
const {password, ...rest} = user;
console.log({ rest });
*/

// const  countries =["nepal","india","japan", "ireland","united kingdom"]
// const largestCountry = (countries) =>  countries .sort((a,b) => a-b).pop();

// const result = largestCountry(countries);
// console.log({ result });

// const userRole = ["user" , "vender"];
//   const sysRole = ["admin" , "vender"];
//   const checkRole = (ur , sr) => sr.some((role) => ur.includes(role));
//   const res = checkRole(ur , sr)
//   console.log(checkRole(userRole , sysRole));

//   const numbers = [1,4,5,8];
//   const result = (num) => numbers.filter((numbers) => number % 5 === 0 );
//   const resu - result(numbers);
//   console.log ( { resu });


//   const numeral = [1,2,3];
//   const getDecimal = (numbers) => 
//   numbers.map((number) => String(number).concat(".00"));
//   const rest = getDecimal(numeral);
//   console.log({ rest })

//write a js function that handles pagination
// const data = [1,2,3,4,5,6,7,8,9,10];
// const page = 1
// const limit = 2
//write a js function that finds the birds aname starting with e character
// const birds = ["parrot","eagles","emus","caracaras","egrets"];
//result : ['eagles , 'emus','egrets']


// const birds = ["parrot","eagles","emus","caracaras","egrets"];
// const birdsName = (birds) => birds.filter(birds => birds.tolowercase().startwithE);
// const birdsStartingWithE = findBirdsStartingWithE(birds);
// console.log(birdsStartingWithE);

// function findBirdsStartingWithE(birdsArray) {
//     const result = birdsArray.filter(bird => bird.toLowerCase().startsWith('e'));
//     return result;
//   }
  
//   const birds = ["parrot", "eagles", "emus", "caracaras", "egrets"];
//   const birdsStartingWithE = findBirdsStartingWithE(birds);
  
//   console.log(birdsStartingWithE); // Output: ["eagles", "emus", "egrets"]
  
  
//    const birds = ["parrot", "eagles", "emus", "caracaras", "egrets"];
//    function findBirdsStartingWithE(birdArray)  {
//     return birdArray.filter(bird => bird.toLowerCase().startsWith('e'));
// }
// const birdsStartingWithE = findBirdsStartingWithE(birds);
//    console.log(birdsStartingWithE);
 
// const birds = ["parrot", "eagles", "emus", "caracaras", "egrets"];
// const findBirdsStartingWithE = (birds) =>
// filterbirds(birds.toLowercase().startsWith('e'));
// const result = findBirdsStartingWithE(birds);
// console.log(result);

const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];
//1 map 
const name = characters.map(item => item.name);
console.log(name);
//b height
const height = characters.map(item => item.height);
console.log(height);
//d first name
const firstName = characters.map(item => item.firstName);
console.log(firstName);
//c name and height
const mixData = characters.map(({ name, height }) => ({ name, height }));
console.log(mixData);

//2 
 const mass = characters.reduce((accumulator, character) => accumulator + character.mass, 0);
 console.log(mass);
 //height 
 const height2 = characters.reduce((accumulator, character) => accumulator + character.height, 0);
 console.log(height2);
 //total charcater
 const totalCharactersInNames = characters.reduce((accumulator, character) => accumulator + character.name.length, 0);
console.log(totalCharactersInNames);

//eye color
const eyeColor = characters.reduce((accumulator, character) => accumulator + character.eyecolor, 0);
console.log(eyeColor);

//filter
const characterWithMassGreater = characters.filter(character => character.mass > 100);
console.log(characterWithMassGreater);
//

const characterWithMassGreater2 = characters.filter(character => character.mass > 200);
console.log(characterWithMassGreater2)
//
const maleCharacters = characters.filter(character => character.gender === 'male');
console.log(maleCharacters);
//
const femaleCharacters = characters.filter(character => character.gender === 'female');
console.log(femaleCharacters);
//sort
name.sort();
console.log(name);
//mass
//mass.sort();
//console.log(mass);
//height
height.sort();
console.log(height);
//implicit function
//gender
gender.sort();
console.log(gender);


 