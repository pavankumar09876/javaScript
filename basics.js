// let x = {
//     name:"pavan"
// }
// console.log(x)

// function  y() {
//     name1="Kumar"
// }
// console.log(y)

// let z = ["Pavan",25,"MCA"]
// console.log(Array.isArray(z))

// let age = 25
// let can = (age < 25)? "yes":"no";
// console.log(can)

// var a=5
// a++
// var b=100;
// b*=10
// document.write(a+b)

// var x=10
// var y=20

// x<y?document.writeln("yes"):document.writeln("no")

// let name = prompt("Enter your name:")
// if (name) {
//     document.write(`Hello,${name}!`)
// }else {
//     document.writeln("Enter your name")
// }
// 
// var a = "100";
 
// let c = 0;

//  let num = (b).toString();
// var b = 10;
// document.write(b.toString() )
//     document.writeln(typeof num + "<br>")

// let str = String(a);
// document.writeln(str)
// document.writeln(typeof str)

// let bool = Boolean(c)
// document.writeln(typeof c)
// console.log(c)
// let result  = a-b
// document.writeln(result)


// alert("Welcome")
// let name = prompt("Enter your Name:")
// confirm(`Your name is, ${name} `)
// document.writeln("Yor are entered in my World")


let day = prompt("Enter a day:");

switch (day){
    case "monday":
        document.write("Start of the work week")
    break;
    case "Friday":
        document.write("Weekend is near")
    break;
    case "Sunday":
        document.write("Weekend")
    break;
    default:
        document.write('Its just a normal day')
}