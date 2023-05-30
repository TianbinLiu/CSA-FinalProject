let showSecondPage = true;

$(function() {
    // Load or hide the second HTML page based on the value of showSecondPage
    if (showSecondPage) {
        $("#includedContent").load("dialogueUnit1.html");
    } else {
        $("#includedContent").hide();
    }
});