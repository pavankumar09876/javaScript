// let x=document.getElementById("first")
// console.log(x)

// let a=document.getElementsByClassName("second")
// console.log(a)

// let b=document.getElementsByTagName("h2")
// console.log(b)

// let c=document.querySelector(".second")
// console.log(c)

// let d=document.querySelectorAll("h2")
// console.log(d)

//// Dom properties to selet html elements
// console.log(document)
// console.log(document.title)
// console.log(document.head)
// console.log(document.body)
// console.log(document.images)
// console.log(document.scripts)

//// Dom manipulications

// var add=document.createElement("h1")
// add.innerText="This add to js"
// console.log(add)
// var parent=document.getElementById("first")
// // parent.appendChild(add)
// console.log(parent.innerText)
// console.log(parent.innerHTML)
// parent.insertBefore(add,last)

// function Change(){
//     document.body.style.backgroundColor="pink"
// }

// let box=document.getElementById("box")
// box.addEventListener("click",()=>{
//     console.log("Click:Element clicked")
// })
//////////////////////////
// box.addEventListener("dbclick",()=>{
//     console.log("dblClick:Element clicked")
// })
/////////////////////
// box.addEventListener("mousedown",()=>{
//     console.log("MouseDown")
// })
/////////////////////////
// box.addEventListener("mouseup",()=>{
//     console.log("Mouseup")
// })
////////////////////////////
// box.addEventListener("mousemove",e=>{
//     console.log("mousemove:",e.clientX,e.clientY)
// })
////////////////////////////
// box.addEventListener("mouseenter",()=>{
//     console.log("Enter the mouse")
// })
// box.addEventListener("mouseleave", () => {
//   console.log("mouseleave: pointer left element");
// });

// const box = document.getElementById("box");

// // Click → toggle color
// box.addEventListener("click", () => {
//   box.style.background = box.style.background === "orange" ? "lightgray" : "orange";
// });

// // Double-click → make bigger
// box.addEventListener("dblclick", () => {
//   box.style.transform = "scale(1.2)";
// });

// // Right-click → shrink back to normal
// box.addEventListener("contextmenu", e => {
//   e.preventDefault();
//   box.style.transform = "scale(1)";
// });

// // Mouse enters → highlight
// box.addEventListener("mouseenter", () => {
//   box.style.boxShadow = "0 0 15px black";
// });

// // Mouse leaves → remove highlight
// box.addEventListener("mouseleave", () => {
//   box.style.boxShadow = "none";
// });

// // Mouse moves → show coordinates in console
// box.addEventListener("mousemove", e => {
//   console.log("Coords:", e.clientX, e.clientY);
// });


