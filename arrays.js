var movies = ['Bahubali', 'RRR', 'Pushpa', 'Don'];
// console.log(movies);
// movies.push("Devara")
// // movies.pop("Devara")
// movies.shift()
// movies.unshift("Devara")
// console.log(movies)
// var games = new Array('Cricket', 'Shattle', 'Bhachalu', 'Carrom');
// console.log(games);
// console.log(games[0])
// games[2]=("khokho")
// games[100]=("Football")
// console.log(games)
// console.log(movies.indexOf("RRR"))
// console.log(movies.slice(1,4))

//////////////////////////////////////
// movies.forEach(function pavan(movie, index, pavan) {
//   console.log(movie);
//   console.log(index);
//   console.log(pavan);
// });
// console.log(movies);

///////////////////////////////////////////
// var salary = new Array(1000,2000,3000,4000)
// console.log(salary)
// salary.forEach(function pavan(salarys,index){
//     var increment = salarys/10
//     salary[index]=salarys+increment
// })
// console.log(salary)

// //////////////////////////////////////////
// var salary = new Array(10,2000,3000,4000)
// console.log(salary)

// function pavan(salarys,index){
//     var increment = salarys/10
//     salary[index]=salarys+increment
// }
// salary.forEach(pavan)
// console.log(salary)

// let a= new Set([10,20,30])
// a.add(40)
// // let s = a.delete(30)
// let c=a.has(20)
// // let z=a.clear()
// console.log(a.size)
// console.log(c)
// for(let i of a){
//     console.log(i)
// }

// let numbers = new Set([1, 2, 3]);
// let arr=Array.from(numbers)
// console.log(arr)
// console.log(typeof arr)

// let set = new Set();
// set.add(1);
// set.add(2);
// set.add(2);
// set.add(3);
// console.log(set.has(2));
// set.delete(1);
// console.log(set.size);
// console.log([...set]);

let citys = ['Hyderabad', 'Gudivada', 'Vijayawada'];
let iteration = citys.entries();
let nex = iteration.next();
while (!nex.done) {
  console.log(nex.value);
  nex = iteration.next();
}
