let myAudio = new Audio("./js/kırpaptyası.mp3"); // Create an Audio object with the file 'Ceylon.mp3'



document.addEventListener("DOMContentLoaded", function() {
    setInterval(GameLoop, 1000 / 10); // Start the game loop when the window is loaded
    
});

function GameLoop() {
    //if (myAudio.paused) { // Check if the audio is paused
        myAudio.play(); // If paused, play the audio
   // }
}
