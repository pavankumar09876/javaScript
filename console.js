// let marks = [

//     ["Anil", "amar", "anthony"],
//     ["Banit", "bably", 'bhanu' ]

//     [10, 20, 30],
//     [40, 50, 60, 70],
//     [80, 90],
//     [100, 110, 120, 140, 150, 160, 170, 180]

//     ]
// document.write("My expected result : ", marks[0][0][1])

// let students = [
//   ['Pavan', 80, 90, 100],
//   ['Chanti', 70, 60, 50],
//   ['Esha', 40, 30, 20],
// ];

// for (let i = 0; i < students.length; i++) {
//   document.write('Student: ' + students[i][0] + '<br>');
//   document.write('Math: ' + students[i][1] + '<br>');
//   document.write('Science: ' + students[i][2] + '<br>');
//   document.write('English: ' + students[i][3] + '<br><br>');
// }

let s = "used"
console.log("log method",s)
console.info("log method",s)
console.warn('log method', s);
console.error("log method",s)
console.table(['xyz','abc','pqr'])
console.table({name:"xyz",age:26,place:"Bangalore"})
console.assert(10>15,"condition false")
console.count("called")
console.count("called")
let x = +prompt('Enter a number');
console.time('loop time:');
while (x != 10) {
  console.log('Enter 10');
  console.timeLog('loop time:');    
  x = +prompt('Enter a number ');
  console.count('called:');
}
console.timeEnd('loopout time:');

console.group("group1")
console.log("group1 log 1")
console.log("group1 log 2")
console.log("group1 log 3")
console.groupEnd()
console.group("group2")
console.log("group2 log 1")
console.log("group2 log 2")
console.log("group2 log 3")
console.groupEnd()
