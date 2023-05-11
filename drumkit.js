// Strict Mode
"use strict";

// Declare constant instrument variables and add their file path 
const kick = new Audio("sounds/kick.wav");
const clap = new Audio("sounds/clap.wav");
const hihat = new Audio("sounds/hihat.wav");
const ride = new Audio("sounds/ride.wav");
const openhat = new Audio("sounds/openhat.wav");
const snare = new Audio("sounds/snare.wav");
const tink = new Audio("sounds/tink.wav");
const tom = new Audio("sounds/tom.wav");

// Declare instrument functions which play the corresponding instrument
function playKick() {
  kick.play();
}

function playClap() {
  clap.play();
}

function playHihat() {
  hihat.play();
}

function playRide() {
  ride.play();
}

function playOpenhat() {
  openhat.play();
}

function playSnare() {
  snare.play();
}

function playTink() {
  tink.play();
}

function playTom() {
  tom.play();
}

document.addEventListener('keydown', (playKick) => {
  let drum = playKick.key;

  if (drum === 'q') {
    kick.play();
  }
  
  else if (drum === 'w') {
    clap.play();
  }

  else if (drum === 'e') {
    hihat.play();
  }

  else if (drum === 'r') {
    ride.play();
  }

  else if (drum === 't') {
    openhat.play();
  }

  else if (drum === 'y') {
    snare.play();
  }

  else if (drum === 'u') {
    tink.play();
  }

  else if (drum === 'i') {
    tom.play();
  }

  else {
    alert("No instrument")
  }
});

// Declare a constant variable and insert the volume slider to it 
const volumeSlider = document.getElementById("volumeslider");

const volumeToNormalized = () => {
  // Using eventlistener to the instrument volumes so they get changed when using the volume slider
volumeSlider.addEventListener("input", function() {
  // Calculating the volume value to be in between 0 and 1 aka normalized (if volume is 50% it is 0.5 and if it is 100% it is 1 etc)
  kick.volume = volumeSlider.value / 100;
  clap.volume = volumeSlider.value / 100;
  hihat.volume = volumeSlider.value / 100;
  ride.volume = volumeSlider.value / 100;
  openhat.volume = volumeSlider.value / 100;
  snare.volume = volumeSlider.value / 100;
  tink.volume = volumeSlider.value / 100;
  tom.volume = volumeSlider.value / 100;
  });
};

const volumeDisplay = () => {
  volumeSlider.addEventListener("input", function() {
    volumeToNormalized();
    const volumeCalculation = volumeSlider.value;
    document.getElementById("volumePercentageText").innerHTML = volumeCalculation;
  });
};

volumeDisplay();