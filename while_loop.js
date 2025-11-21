// let i=1
// while (i<=10){
//     console.log(i)
//     i++
// }

// let a=1
// count=0
// while(a<=100){
//     count+=a
//     a++
// }
// console.log(count)

// let b=[1,2,3,4,5,6,7,8,9,10,11,1,2,13,14,15,16,17,18,19,20]
// let i=0
// while (i<b.length){
//     if(b[i]%2==0){
//         console.log(b[i])
//     }
//     i++
// }

// let password="secret"
// let b=prompt("Enter a password")
// while (b !== password){
//       b=prompt("Wrong, Enter a Correct password")
//     }
// console.log("Access Grant")

// let i=5
// while (i>0){
//     console.log(i)
//     i--
// }

// let i=3
// while (i<=30){
//     console.log(i)
//     i+=3
// }

// let arr = [10, 20, 30, 40, 50];
// let i=arr.length-1
// while(i>=0){
//     console.log(arr[i])
//     i--
// }

// let nums = [2,5,7,10,12,3,8];
// let i=0
// let count=0
// while(i < nums.length){
//     if(nums[i]%2==0){
//         count++
//     }
//     i++
// }
// console.log(count)

// let i
// do{
//     i=Number(prompt("Enter a number greater than 50"))
// }while(i<=50){
//     console.log("Accepted:",i)
// }

// let i=10
// while(i>0){
//     console.log(i)
//     i--
// }

// let i=1
// while(i<=25){
//     if(i%2!=0){
//         console.log(i)
//     }
//     i++
// }

// let i=1
// count=0
// while(i<=25){
//     if(i%2!=0){
//         count+=i
//     }
//     i++
// }
// console.log(count)

// let arr = [3, 8, 11, 14, 17, 20];
// let i = 0;
// let count = 0;
// while (i < arr.length - 1) {
//   if (arr[i] % 2 != 0) {
//     console.log(arr[i]);
//     count += i;
//   }
//   i++;
// }
// console.log(count);

// let username
// do{
//     username=prompt("Enter a name atleadt 5char")
// }while(username.length<5){
//     console.log(username)
// }

// let i=1
// do{
//     console.log(i)
//     i++
// }while(i<=5)

// let i=0
// while (i<=10){
//     console.log(i*i)
//     i++
// }

// let i=1
// count=[]
// while(i<=50){
//     if(i%5==0){
//         count.push(i)
//     }
//     i++
// }
// console.log(count)

// let arr = [4, 7, 9, 0, 3, 5];
// let i=0;
// while(i<=arr.length){
//     if(arr[i]==0){
//         console.log(arr[i])
//         break
//     }
//     console.log(arr[i])
//     i++
// }

// let nums = [12, 45, 7, 89, 23];
// let max=nums[0]
// let i=0
// while(i<=nums.length){
//     if(nums[i]>max){
//         max=nums[i]
//     }
//     i++
// }
// console.log(max)

// let arr = "hello";
// let i = arr.length - 1;
// let reversed = "";

// while (i >= 0) {
//   reversed += arr[i];
//   i--;
// }

// console.log(reversed);

// let a=1
// let i=7
// while(a<=10){
//     console.log("7 *",a,"=",a*i)
//     a++
// }

let str = 'javascript';
let vow = 'aeiou';
let i = 0;
count = 0;
while (i < str.length) {
  if (vow.includes(str[i])) {
    count++;
  }
  i++;
}
console.log(count);
