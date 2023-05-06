// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    changeText("This is really cool!");
});
console.log();
function changeText(string) {
    document.getElementById("text").textContent = string
    
}
//changeText("This is really cool!");