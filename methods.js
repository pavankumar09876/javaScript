// String methods

let a = 'I learned JavaScripts';

// document.writeln(a.length + "<br>")
// document.writeln(a.toUpperCase()+"<br>")
// document.writeln(a.toLowerCase()+"<br>")
// document.writeln(a.indexOf("J")+"<br>")
// document.writeln(a.slice(0,9)+"<br>")
// document.writeln(a.replace("Java","Type")+"<br>")
// document.writeln(a.split("a")+"<br>")
// document.writeln(a.includes("a")+"<br>")
// document.writeln(a.charAt(5).toUpperCase()+"<br>")

// Number Method
// let num = 10.12

// document.write(num.toFixed(2)+"<br>")
// document.write(num.toString()+"<br>")
// document.write(Number.isInteger(num)+"<br>")
// document.write(Number.isInteger(num)+"<br>")
// document.write(Math.round(num)+"<br>")
// document.write(Math.floor(num)+"<br>")
// document.write(Math.ceil(num)+"<br>")
// document.write(Math.max(num)+"<br>")
// document.write(Math.random())

// let isOn =true
// let isOff = false

// document.write(typeof isOn + "<br>")
// document.write(!isOn + "<br>")
// document.write(Boolean(1) + "<br>")
// document.write(Boolean("Hello") + "<br>")

// let fruits = ["apple", "banana", "mango"];

// fruits.push("orange");
// document.write(fruits + "<br>")
// fruits.pop();
// document.writeln(fruits)
// fruits.unshift("grape");
// document.write(fruits + "<br>")
// fruits.shift();
// document.write(fruits + "<br>")
// document.write(fruits.includes("banana"));
// document.write(fruits.indexOf("mango"));
// document.write(fruits.join(", "));
// document.write(fruits.slice(0, 2));
// document.write(fruits.concat(["kiwi"]));

// let person = {
//   name: 'Pavan',
//   age: 21,
//   city: 'Gudivada',
// };
// document.write(person.name);
// document.write(person['city']);
// person.job = 'Software';
// delete person.age;
// document.write(Object.keys(person));
// document.write(Object.values(person));

// let now = new Date();

// console.log(now.toDateString()); 
// console.log(now.getFullYear());  
// console.log(now.getMonth());     
// console.log(now.getHours());     


let p=["a","b","c",11,22,33,44]
let c=["A","B","C"]
// let poplast = p.pop()
// document.writeln(p+"<br>")
// document.writeln(poplast)

// let popfirst = p.shift()
// document.writeln(popfirst)

// let addFirst = p.unshift("Pavan",100)
// document.writeln(p+"<br>")

// document.writeln(p.length)
// let combine = p.concat(c)
// document.writeln(combine)

// let joins = combine.join("*")
// document.writeln(joins)

// let sliceCut = combine.slice(1,)
// document.writeln(sliceCut)
// let spliceReplace = p.splice(4,1,"Something add here")
// document.writeln(spliceReplace)
// document.writeln(p)
// let SpliceAdd = p.splice(4,0,"Added-5")
// document.writeln(p+"<br>")
// document.write(SpliceAdd)

// let indexofChech = p.indexOf("110")
// if (indexofChech === -1) {
//     p.push("1000")
// }
// document.writeln(p)

let score = [10,20,30,40,50]
let studentName = ["PAvan","Aakhil","Munna","Bhaskra","Srinu"]

// studentName.forEach(function(item,index) {
//     // document.writeln(item+"<br>")
//     document.write(index +"."+ item+"<br>")
// });

// score.forEach(function(score){
//     let scorecard = score*2
//     if (scorecard >= 30){
//         document.write(scorecard+"<br>")
//     }
// })

let marks = [

    ["Anil", "amar", "anthony"],
    ["Banit", "bably", 'bhanu' ]

    [10, 20, 30],
    [40, 50, 60, 70],
    [80, 90],
    [100, 110, 120, 140, 150, 160, 170, 180]

    ]

document.write("My expected result : ", marks[0][0][1])