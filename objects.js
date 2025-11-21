// let names = prompt("Enter your Name:")
// let marks = prompt("Enter you marks")

// switch(true){
//     case marks>91 && marks<=100:
//         result = "your are a topper"
//     break;
//     case marks>81 && marks<=90:
//         result = "You are Second Class"
//     break;
//     case marks > 71 && marks <=80:
//         result = "Your Third class"
//     break;
//     case marks > 61 && marks <= 70:
//         result = "Your are Forth grade"
//     break;
//     default:
//         result = "You are fail"
// }
// document.write("Hello" +names+" and your marks <h1>" +marks+ "</h1>")

// let movie = {
//     name:"Pavan",
//     year : 2002,
//     work : "Software"
// }
// console.log(movie)
// movie.Salary=35000
// movie.name="Chanti"
// console.log(movie)

function person(name, age, work) {
  this.name = name;
  this.age = age;
  this.work = work;
  //   this.login = function () {
  //     console.log(`${this.name} login Successfully`);
  //   };
}
person.prototype.login = function () {
  console.log(`${this.name} login Successfully`);
};

let user1 = new person( 'Pavan', 2002, 'Software' );
console.log(user1);
let user2 = new person('Pavan1', 20, 'Software');
user1.phno = 46568467;
console.log(user2);
user1.login()
user2.login()

let movie = Object.create(user1);
movie.name = 'anusha';
movie.year = 2001;
movie.work = 'Software1';
console.log(movie);
movie.login()

console.log(Object.keys(movie))
console.log(Object.values(movie))
console.log(Object.entries(movie))