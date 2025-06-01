let buttons = document.querySelectorAll("button");

// Attach click event to each button
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        let buttonKey = this.innerText.trim().toUpperCase(); // Convert to uppercase
        makeSound(buttonKey);
    });
}

// Attach keypress event once
document.addEventListener("keypress", function(event) {
    makeSound(event.key.toUpperCase());
});

// Sound function
function makeSound(key) {
    switch (key) {
        case "J":
            new Audio("audio/mixkit-achievement-win-drums-555.mp3").play();
            break;
        case "I":
            new Audio("audio/mixkit-drum-bass-hit-2294.mp3").play();
            break;
        case "Z":
            new Audio("audio/mixkit-joke-drums-578.mp3").play();
            break;
        case "V":
            new Audio("audio/mixkit-drum-roll-566.mp3").play();
            break;
        case "X":
            new Audio("audio/mixkit-drum-joke-accent-579.mp3").play();
            break;
        case "K":
            new Audio("audio/mixkit-drum-bass-hit-2294.mp3").play();
            break;
        default:
            console.log("Pressed key:", key);
            break;
    }
}
