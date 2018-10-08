

var colors = [
random255(),
random255(),
random255(),
random255(),
random255(),
random255()];

var panel = document.getElementById("panel");
var  result = document.getElementById("result");
var squares = document.querySelectorAll(".square")

var choosen = random();
var question = document.getElementById(
    "question");
r = prompt("Hello What is your name?");
result.innerHTML = "Let's start "+ r;
question.textContent = choosen;
for (var i = 0; i < squares.length; i++) {
//add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
//add click listeners to squares
squares[i].addEventListener("click",function(){
    //grab color of clicked squares
    var clickedColor = this.style.backgroundColor;
    //compared to choosen
    if(clickedColor === choosen){
        result.innerHTML = "Easy! Just a peace of cake";
        panel.style.backgroundColor= choosen;
        for(var i = 0; i <squares.length; i++){
            squares[i].style.backgroundColor= choosen;
        }

    }
    else{
        this.style.backgroundColor="rgb(45, 47, 61)";
        result.innerHTML = "Cant believe you were wrong";
    }
})
}

function random(){
    var random  = Math.floor(Math.random()*6);
    return colors[random];
}

function random255(){

    var r  = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
return "rgb"+"("+r+", "+g+", "+b+")";
}
function reset() {
    location.reload();
}

