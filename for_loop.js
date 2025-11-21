// for(let i=0;i<=10;i++){
//     if(i===5) break
//     document.write(i+"<br>")

// }

// for(let i=5;i>=1;i--){
//     document.write(i+"<br>")
// }

// for (let i=2; i<=10; i+=2){
//     document.write(i+"<br>")
// }
// for (let i=1; i<=10; i+=1){
//     if(i%2==1){
//         document.write(i)
//     }
// }

// let sum=0;
// for(let i=1; i<=10; i++){
//     sum+=i
// }
// document.writeln(sum)

// while

// let x=1;
// while(x<=10){
//     document.write(x+"<br>")
//     x++
// }

// var num=1
// var sum=0
// while (num<=10){
//     sum+=num
//     num++;
// }
// document.write(sum)

// var x=1;
// while(x<=10){
//     document.write(x+"<br>")
//     x+=2
// }

// var count =5;
// while(count>0){
//     document.writeln("Countdown:",count,"<br>")
//     count--;
// }

// var total = 0;
// var target = 1000;
// var deposite = 200;

// while(total < target){
//     total+=deposite
//     document.writeln("Current Balance:",total,"<br>")
// }
// document.writeln("Target Reached")

// let correctpassword = "pavan123";
// let username = "pavan";
// let enterUsername = prompt("Enter Username")
// var EnterPassword = prompt("Enter Password")
// while(EnterPassword != correctpassword , username != enterUsername){
//     enterUsername = prompt("Enter username")
//     EnterPassword = prompt("Enter Correct password")
// }
// alert("Welcome")
// document.writeln("your username ",username,"<br>")
// document.writeln("your password ",EnterPassword)

// var play=true;
// while (play){
//    document.write("Playing the game...");
//   play = confirm("Do you want to play again?");
// }
// document.writeln("Game ended!");

// var stock = 10;
// while (stock >0){
//     document.writeln("Packing item",stock,"<br>");
//     stock--;
// }
// document.writeln("Stock Empty")

// let total = 0;
// let price = 100;
// while (total < 500){
//     total+=price;
//     document.writeln("Added " +price + ", total now " + total,"<br>");
// }
// document.writeln("Reached 500 Limit")

// let seconds = 5;
// while (seconds > 0) {
//   document.writeln("Starts in " + seconds + "...","<br>");
//   seconds--;
// }
// document.writeln("Go")

// let name = prompt("Enter your name:");
// let confirmName = prompt("Re-enter your name to confirm:");
// while (name !== confirmName) {
//   confirmName = prompt("Names do not match! Please re-enter:");
// }
// alert("Name confirmed: " + name);
// document.writeln(name)

// let secret = 7
// let guess = Number(prompt("Enter a secret number:"))
// while(guess != secret){
//     guess = Number(prompt("Try Again"))
// }
// alert("Congrats")
// document.writeln("Congrats"+guess)

// let y=0
// do {
//     document.writeln("Hahaha")
//     console.log("Im console")
//     y++
// } while (y< 10)

// amount = 100;
// days = 30;
// intrest = 2;
// for (i=1; i<=days; i++){
//     if (i % 4 ===0){
//         amount+=intrest
//     }
//     document.writeln(i+ " day is"+ amount ,"<br>")
// }

// let numberss = [1, 2, 2, 3, 4, 3, 5, 7, 5, 8, 9];
// let uniqueNumber = [...new Set(numberss)];
// document.write(uniqueNumber);

// if(10>20){
//     console.log("This is  if true")
// }else if(10<20){
//     console.log("This is else if true")
// }

// let score=prompt("Enter your marks");
// if(score>90){
//     console.log("A+")
// }else if(score>75){
//     console.log("B+")
// }else if(score>60){
//     console.log("C+")
// }else if(score<45){
//     console.log("Fail")
// }

// speed = prompt("Enter Vehicle Speed")
// if(speed > 90){
//     console.log("Red")
// }else if(speed > 75){
//     console.log("yellow")
// }else if(speed > 50){
//     console.log("Green")
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for (let i=2;i<=20;i+=2){
//     console.log(i)
// }

// for(i=10;i>=1;i--){
//     console.log(i)
// }

// let total = 0;
// for (i = 1; i <= 10; i++) {
//   total+=i;
// }
// console.log(total);

// let colors=["green","yellow","ged","blue"]
// for(i=0; i<=colors.length;i++){
//     console.log(colors[i])
// }

// nums = [5, 56784, 9, 23, 98, 900, 1008];
// max = nums[0];
// for (i = 1; i < nums.length; i++) {
//   if (nums[i] > max) {
//     max = nums[i];
//   }
// }
// console.log(max);
