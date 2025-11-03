let name = prompt("Enter your Name:")
let marks = prompt("Enter you marks")

switch(true){
    case marks>91 && marks<=100:
        result = "your are a topper"
    break;
    case marks>81 && marks<=90:
        result = "You are Second Class"
    break;
    case marks > 71 && marks <=80:
        result = "Your Third class"
    break;
    case marks > 61 && marks <= 70:
        result = "Your are Forth grade"
    break;
    default:
        result = "You are fail"
}
document.write("Hello" +name+" and your marks <h1>" +marks+ "</h1>")

