// function add(){
//       let a= parseFloat(document.getElementById("num1").value);
//       let b=parseFloat(document.getElementById("num2").value)
//       document.getElementById("result").innerText = "Result"+(a+b);
//     }

// function change(){
//     let colors = ["lightblue","lightgreen","lightyellow","lightpink"];
//     let randomColor = colors[Math.floor(Math.random()*colors.length)];
//     document.body.style.backgroundColor= randomColor
//     document.getElementById("colorName").innerText = "Current Color: " + randomColor;
// }
// function robo(){
//     alert("We are robos")
// }

// function greet(){
//     let name =document.getElementById("name").value;
//     if (name === ""){
//         document.getElementById("output").innerText = "Please enter you name"
//     } else{
//         document.getElementById("output").innerText = "Hello" + name;
//     }
// }

// let count=0;
// let interval;
// function startCounter(){
//     interval = setInterval(function(){
//         count++;
//         document.getElementById("counter").innerText = count;
//     },1000);
// }
// function stopCounter(){
//     clearInterval(interval);
// }

const form = document.getElementById('myForm');
const fullname = document.getElementById('fullname');
const email = document.getAnimations('email');
const password = document.getElementById('password');
const error = document.getElementById('error');

form.addEventListener('submit', function (e) {
  error.innerHTML = '';
  if (fullname.value.trim() === '') {
    e.preventDefault();
    error.innerHTML = 'Full name required';
    return;
  }
  if (!email.value.includes('@')) {
    e.preventDefault();
    error.innerHTML = 'Enter Valid Email';
    return;
  }
  if (password.value.length < 6) {
    e.preventDefault();
    error.innerHTML = 'Password must be > 6 chars';
    return;
  }
});
