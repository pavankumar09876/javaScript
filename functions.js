// function pavan(a,b){
//     return a*b
// }
// document.writeln(pavan(5,10))

// let Pavan1 = function(a,b){
//     return a+b
// }
// document.write(Pavan1(5,5))

// const a = (a,b) => a*b;
// document.writeln(a(5,5))

// const number = number => number*number
// document.write(number(10))

// let timer = setTimeout (function(){
//     document.write("This is name less function");
// },100);
// // clearTimeout(timer)

// let timer;

// function startTimer(){
//     document.getElementById("msg").innerHTML = "Timer Runs";
//     timer =setTimeout(function(){
//         document.getElementById("msg").innerHTML = "Timer Executed";
//     },4000)
// }
// function stopTimer(){
//     clearTimeout(timer)
//     document.getElementById("msg").innerHTML = "Stop The execution";
// }

// function name(a,b) {
//     document.writeln(a-b)
// }
// name(90,86)

//  function pavan(...numbers){
//     var total = 0;
//     for (let num of numbers){
//         total+=num;
//     }
//     document.writeln("total =" +total)
// }
// pavan(1,2,3,4,5)

// var userName = prompt("Enter you Name:")
// function pavan(name){
//     document.write("Hello My friend name is "+name);
// }
// pavan(userName)

// call back function
// function processUserInput(calback) {
//   let name = "Chanti";
//   calback(name);
// }
// processUserInput(function(name) {
//   document.write("Hello, " + name);
// });

// parameter
// function add(a,b){
//     return a+b
// }
// document.write(add(3,5))

// const multiply = function(a,b){
//     return a*b
// }
// document.write(multiply(5,5))

// const mul = (a,b) => a/b;
// document.write(mul(10,2)) 

// function square(a,b){
//     return a*b
// }
// document.write(square(10,10))

setTimeout(function(){
    document.write("This runs after 2 seconds");
},2000);