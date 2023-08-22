
var headerElement = document.getElementById("header");
var colors = ["red", "blue", "green", "purple", "orange"];

headerElement.addEventListener("click", function() {
    var randomIndex = Math.floor(Math.random() * colors.length);
    headerElement.style.backgroundColor = colors[randomIndex];
});
