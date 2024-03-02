// Function to make text bigger
function makeTextBigger() {
    document.getElementById("textInput").style.fontSize = "24pt";
}

// Function to apply or remove fancy styles and show an alert
function fancifyText() {
    var textInput = document.getElementById("textInput");
    if (document.getElementById("fancyShmancy").checked) {
        alert("FancyShmancy style applied!");
        textInput.style.fontWeight = "bold";
        textInput.style.color = "blue";
        textInput.style.textDecoration = "underline";
    } else if (document.getElementById("boringBetty").checked) {
        alert("BoringBetty style applied. Going back to normal.");
        textInput.style.fontWeight = "normal";
        textInput.style.color = "black";
        textInput.style.textDecoration = "none";
    }
}

// Function for "Moo" Button
function mooText() {
    var textInput = document.getElementById("textInput");
    var text = textInput.value.toUpperCase();
    var sentences = text.split(".");
    for (var i = 0; i < sentences.length; i++) {
        // Check if the sentence has content before adding "-Moo"
        if (sentences[i].trim().length > 0) {
            sentences[i] = sentences[i].trim() + "-Moo";
        }
    }
    textInput.value = sentences.join(". ").trim();
}

// Event listeners for radio buttons
window.onload = function() {
    document.getElementById("fancyShmancy").addEventListener("change", fancifyText);
    document.getElementById("boringBetty").addEventListener("change", fancifyText);
}

