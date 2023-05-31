let showSecondPage1 = false;
let showSecondPage2 = false;
let showSecondPage3 = false;
let finalBattle = false;



    // Function to update the content based on the value of myBoolean
$(function updateContent() {
      if (showSecondPage1) {
        $("#includedContent").load("dialogueUnit1.html");
      } else {
        $("#includedContent").hide();
      }
});
updateContent();

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

$(function() {
    // Load or hide the second HTML page based on the value of showSecondPage
    if (finalBattle) {
        $("#includedContent").load("quiz.html");
    } else {
        $("#includedContent").hide();
    }
});

