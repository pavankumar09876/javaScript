function greet() {
  console.log('Hello, Pavan');
}

function user(name) {
  console.log('Hello ' + name);
}
user('Captain America');
user('Iron man');

function add(a, b) {
  return a + b;
}
let result = add(5, 5);
console.log(result);

let multiply = function mul(a, b) {
  console.log(a * b);
};
mul = multiply(5, 5);

function checkAge() {
  if (age >= 18) {
    console.log('you are eligable');
  } else {
    console.log('you are not eligable');
  }
}
let age = prompt('Enter your age:');
checkAge(age);

const square = (n) => n * n;
console.log(square(5));

// Square of a Number
function square(a) {
  return a * a;
}
console.log(square(5));

// Check Even or Odd
function oddEven(num) {
  if (num % 2 == 0) {
    console.log(num, 'This is Even');
  } else {
    console.log(num, 'This is odd');
  }
}
let a = prompt('Enter a number');
oddEven(a);

// Calculate Area of a Rectangle
function find(length, width) {
  return length * width;
}
console.log(find(5, 10));

// Find Largest Number
let find = function findLarge(a, b, c) {
  if (a > b && a > c) {
    console.log(a, 'is big number');
  } else if (b > c) {
    console.log(b, 'is the largest number');
  } else {
    console.log(c, 'is largest number');
  }
};
findLarge = find(44, 77, 22);

// Reverse a String
function reverse(str) {
  return str.split('').reverse().join('');
}
console.log(reverse('Pavan'));

// Login Check
function chechPassword(password) {
  const correctPassword = 'Pavan123';
  if (password === correctPassword) {
    alert('LOgin successfully');
  } else {
    alert('Login failed');
  }
}
let user = prompt('Enter your password:');
console.log(chechPassword(user));

// Returning Multiple Values (Using Object)
function objects(a, b) {
  return {
    add: a + b,
    sub: a - b,
    mul: a * b,
    div: a / b,
  };
}
console.log(objects(5, 5));

// Check if a Number is Prime
function prime(num) {
  if (num <= 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
let userNum = prompt('Enter a number:');
console.log(prime(userNum));

// Find Factorial
function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}
console.log(factorial(5));

// Count Vowels in a String
function vowel(str) {
  let count = 0;
  let vowels = 'aeiouAEIOU';
  for (let char of str) {
    if (vowels.includes(char)) count++;
  }
  return count;
}
console.log(vowel('Pavan Kumar'));

///////////////////////////////////////////////////////
// Check Palindrome
function isPalindrom(str) {
  let reverse = str.split('').reverse().join('');
  return str === reverse;
}
let user = prompt('Enter a string:');
console.log(isPalindrom(user));

/////////////////////////////////////////////
// Maximum Number in Array
function maxNumber(arr) {
  let max = arr[0];
  for (let num of arr) {
    if (num > max) max = num;
  }
  return max;
}
console.log(maxNumber([5, 9, 4, 7, 3, 9]));

//////////////////////////////////////////////////////////
// Display Current Date & Time
function date() {
  let now = new Date('jan 1/2026');
  console.log('Current date and time:', now.toString());
}
date();

//////////////////////////////////////////////
// Generate Random Number
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(random(1, 50));

//////////////////////////////////////////////////////
////Add Two arrays
function addTwoLists(arr1, arr2) {
  return arr1.concat(arr2);
}
console.log(addTwoLists([1, 2, 3, 4, 5], [6, 7, 8, 9, 0]));

///////////////////////////////////////////////
// Claculate each string length
function length1(arr) {
  for (char of arr) {
    console.log(char.length);
  }
}
length1(['pavan', 'aakhil']);

////////////////////////////////////////////////////
// convert uppercase
function upperCase() {
  let user = prompt('Enter a name;');
  return user.toUpperCase();
}
console.log(upperCase());

///////////////////////////////////////////
function strongPassword(password) {
  if (password.length < 6) {
    return 'Week password';
  } else if (password.length < 10) {
    return 'medium password✊';
  } else {
    return 'Strong password';
  }
}
let user = prompt('Enter a password:');
console.log(strongPassword(user));

////////////////////////////////////////////
function birth(birthyear) {
  let currentyear = new Date().getFullYear();
  return currentyear - birthyear;
}
console.log(birth(2002));

/////////////////////////////////
function sorts(arr) {
  return arr.sort((a, b) => a - b);
}
console.log(arr([3, 8, 1, 2, 9]));
