let showSecondPage1 = true;
let showSecondPage2 = false;
let showSecondPage3 = false;

$(function() {
    // Load or hide the second HTML page based on the value of showSecondPage
    if (showSecondPage1) {
        $("#includedContent").load("dialogueUnit1.html");
    } else {
        $("#includedContent").hide();
    }
});

$(function() {
    // Load or hide the second HTML page based on the value of showSecondPage
    if (showSecondPage2) {
        $("#includedContent").load("dialogueUnit2.html");
    } else {
        $("#includedContent").hide();
    }
});

$(function() {
    // Load or hide the second HTML page based on the value of showSecondPage
    if (showSecondPage3) {
        $("#includedContent").load("dialogueUnit3.html");
    } else {
        $("#includedContent").hide();
    }
});

let myImage1 = document.getElementById("myImage1");

// Add a click event listener to the image
myImage1.addEventListener("click", function() {
  // Set the boolean variable to false
  showSecondPage1 = false;
});