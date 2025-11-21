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

// let timer1;

// function startTimer(){
//     document.getElementById("msg").innerHTML = "Timer Runs";
//     timer1 =setTimeout(function(){
//         document.getElementById("msg").innerHTML = "Timer Executed";
//     },4000)
// }
// function stopTimer(){
//     clearTimeout(timer1)
//     document.getElementById("msg").innerHTML = "Stop The execution";
// }

// function name(a,b) {
//     document.writeln(a-b)
// }
// name(90,86)

// function pavan(...numbers) {
//   var total = 0;
//   for (let num of numbers) {
//     total += num;
//   }
//   console.log('total =' + total);
// }
// pavan(1, 2, 3, 4, 53);

// var userName = prompt("Enter you Name:")
// function pavan(name){
//     document.write("Hello My friend name is "+name);
// }
// pavan(userName)

// // call back function
// function processUserInput(calback) {
//   let name = "Chanti";
//   calback(name);
// }
// processUserInput(function(name) {
//   document.write("Hello, " + name);
// });

// // parameter
function add(a,b){
    return a+b
}
document.write(add(3,5))

const multiply = function(a,b){
    return a*b
}
document.write(multiply(5,5))

// const mul = (a,b) => a/b;
// document.write(mul(10,2))

// function square(a,b){
//     return a*b
// }
// document.write(square(10,10))

// setTimeout(function(){
//     document.write("This runs after 2 seconds");
// },2000);

// var sum = (num1,num2)=>num1*num2
// console.log(sum(5,5))

// var ano = function(a,b){
//     return a*b
// }
// console.log(ano(5,5))

// let movies = ['Bahubali', 'RRR', 'Pushpa', 'Don'];
// movies.forEach(function pavan(items,index){
//     console.log(index+":"+items)
// })

// let numb = [10,20,30,40,50]
// numbers.forEach(num=> {
//     console.log(num*2);
// });

// var numbers = [10,20,30,40,50]
// let total=0
// number.forEach(num=> {
//     total+=num
// });
// console.log(total);

// let employes= [
//     {name:"Pavan",Salary:35000},
//     {name:"Aakhil",Salary:30000}
// ]
// employes.forEach(function pavan(items){
//     console.log(`Name is ${items.name} and Salary is ${items.Salary}`)
// })

// let name1=[
//      {name:"Pavan",Salary:35000},
//     {name:"Aakhil",Salary:30000}
// ]
// name1.forEach(emp =>{
//     console.log(`Name is ${emp.name} and Salary is ${emp.Salary}`)
// })

// let num=[10,20,30,40,50]
// let add1=[]
// num.forEach(numb =>{
//     add.push(numb)
// })
// console.log(add1)