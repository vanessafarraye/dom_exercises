// Your code here
 var bottonClicker = document.querySelector("#clicker");
bottonClicker.addEventListener("click", function (event) {
    alert("hello");
});


var test = document.getElementById("mouser")
test.addEventListener("mouseleave", function( event ) {   
    event.target.style.backgroundColor = "green";
    console.log("testBlue")
})
test.addEventListener("mouseover", function( event ) {   
    event.target.style.backgroundColor = "yellow";
    console.log("test")
})

var form = document.querySelector("form")
form.addEventListener("submit", function( event ) { 
var value = document.querySelector("input").value  
    alert(value)
})
