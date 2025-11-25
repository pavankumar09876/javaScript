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

var add=document.createElement("h1")
add.innerText="This add to js"
console.log(add)
var parent=document.getElementById("first")
// parent.appendChild(add)
console.log(parent.innerText)
console.log(parent.innerHTML)
parent.insertBefore(add,last)