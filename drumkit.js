"use strict";

// Declare an constant instrument variables and add their file path 
const drumKit = {
  'kick':    new Audio("sounds/kick.wav"),
  'clap':    new Audio("sounds/clap.wav"),
  'hihat':   new Audio("sounds/hihat.wav"),
  'ride':    new Audio("sounds/ride.wav"),
  'openhat': new Audio("sounds/openhat.wav"),
  'snare':   new Audio("sounds/snare.wav"),
  'tink':    new Audio("sounds/tink.wav"),
  'tom':     new Audio("sounds/tom.wav")
};

// Declare an instrument function which play the selected instrument
function playSound(sound) {
  if(drumKit[sound]) {
    drumKit[sound].play();
  } else {
    alert("No instrument");
  }
}

// Change volume
const volumeSlider = document.getElementById("volumeslider");
volumeSlider.addEventListener("input", function() {
  let volume = volumeSlider.value / 100;
  for (let sound in drumKit) {
    drumKit[sound].volume = volume;
  }
  document.getElementById("volumePercentageText").innerHTML = volumeSlider.value;
});

// Create an object to map keyboard keys to their instrument sound
const keyMappings = {
  'q': 'kick',
  'w': 'clap',
  'e': 'hihat',
  'r': 'ride',
  't': 'openhat',
  'y': 'snare',
  'u': 'tink',
  'i': 'tom',
};

// Add a keydown event listener to the document to play the instrument sound when a key is pressed down
document.addEventListener('keydown', (event) => {
  const key = event.key;
  if(keyMappings[key]) {
    playSound(keyMappings[key]);
  }
});