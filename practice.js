// for(i=1;i<=50;i++){
//     console.log(i)
// }

// for(i=1;i<=25;i++){
//     if(i%2==1){
//         console.log(i)
//     }
// }

// let total = 0;
// for (i = 1; i <= 100; i++) {
//   total += i;
// }
// console.log(total);

// let fruits = ["apple", "banana", "mango", "orange"];
// for(i=0;i<=fruits.length;i++){
//     console.log(fruits[i])
// }

// let nums = [3, 15, 8, 22, 7, 14];
// let count=0
// for(i=0;i<nums.length;i++){
//     if(nums[i]>10){
//         count++
//     }
// }
// console.log(count)

// let letters = ['a', 'b', 'c', 'd', 'e'];
// for (i = letters.length - 1; i >= 0; i--) {
//   console.log(letters[i]);
// }

// let word="hello"
// result=""
// for(i=1;i<=5;i++){
//     result+=word
// }
// console.log(result)

// let b="pavan"
// for(i=0;i<b.length;i++){
//     console.log(b[i])
// }

// let nums = [4, 7, 12, 9, 20, 3];
// let count=" "
// for(i=0;i<nums.length;i++){
//     if(nums[i]%2==0){
//         count++
//     }
// }
// console.log(count)

// let prices = [10, 20, 5, 7];
// var count=0
// for(i=0;i<prices.length;i++){
//     count+=prices[i]
// }
// console.log(count)

// for(i=0;i<=5;i++){
//     console.log("*".repeat(i))
// }

// let cities = ["Tokyo", "Paris", "Dubai"];
// for(i=0;i<cities.length;i++){
//     console.log(i,cities[i])
// }

// for(i=1;i<=10;i++){
//     console.log("3 *",i,"=",i*3 )
// }

// for (let i = 1; i <= 5; i++) {
//     console.log(i + ". item");
// }

// let arr = [12, 5, 9, 1, 7];
// min=arr[0]
// for(i=0;i<arr.length;i++){
//     if(arr[i]<min){
//         min=arr[i]
//     }
// }
// console.log(min)

// for(i=3;i<=30;i+=3){
//     console.log(i)
// }

// let arr=["a","b","c","d"]
// for(let i =arr.length-1;i>=0;i--){
//     console.log(arr[i])
// }

// let num=[10,20,33,43,50,60,70,80,90,100]
// count=0
// for(i=0;i<num.length;i++){
//     if(num[i]%5==0){
//         count++
//         // console.log(num[i])
//     }
// }
// console.log(count)

// let product =1
// for(i=1;i<=10;i++){
//     product=product*i
// }
// console.log(product)

// let text = "hello";
// for (let i = 0; i < text.length; i++) {
//     console.log(text.charCodeAt(i));
// }

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (i = 0; i < num.length; i += 2) {
//   console.log(num[i]);
// }

// let letters="JaVaScRiPt Is FuN"
// count=0
// for(let i=0;i<letters.length;i++){
//     let ch=letters[i];
//     if (ch >="A" && ch <= "Z"){
//         count++
//     }
// }
// console.log(count)

//////////////////////////
// let i=1
// while (i<=5){
//     console.log(i)
//     i++
// }

// let i=5
// while (i>0){
//     console.log(i)
//     i--
// }

// function even_or_odd(n){
//     return n%2===0? "even":"odd"
// }
// console.log(even_or_odd(4))

// function stri(str){
//     return str.length
// }
// console.log(stri("pavan"))

// function printlist(a,b,c){
//     console.log(Math.max(a,b,c))
// }
// printlist(5677,9898,6790)

function makeCounter(){
    let count=0;

    return function(){
        count+=1
        return count
    }
}
const counter=makeCounter()
console.log(counter())
console.log(counter())