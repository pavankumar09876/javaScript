function add(){
      let a= parseFloat(document.getElementById("num1").value);
      let b=parseFloat(document.getElementById("num2").value)
      document.getElementById("result").innerText = "Result"+(a+b);
    }

function change(){
    let colors = ["lightblue","lightgreen","lightyellow","lightpink"];
    let randomColor = colors[Math.floor(Math.random()*colors.length)];
    document.body.style.backgroundColor= randomColor
    document.getElementById("colorName").innerText = "Current Color: " + randomColor;
}

function greet(){
    let name =document.getElementById("name").value;
    if (name === ""){
        document.getElementById("output").innerText = "Please enter you name"
    } else{
        document.getElementById("output").innerText = "Hello" + name;
    }
}

let count=0;
let interval;
function startCounter(){
    interval = setInterval(function(){
        count++;
        document.getElementById("counter").innerText = count;
    },1000);
}
function stopCounter(){
    clearInterval(interval);
}