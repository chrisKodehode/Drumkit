// Strict Mode
"use strict";

// Initialize constant variables for each instrument sound with their file path
const kick = new Audio("sounds/kick.wav");
const clap = new Audio("sounds/clap.wav");
const hihat = new Audio("sounds/hihat.wav");
const ride = new Audio("sounds/ride.wav");
const openhat = new Audio("sounds/openhat.wav");
const snare = new Audio("sounds/snare.wav");
const tink = new Audio("sounds/tink.wav");
const tom = new Audio("sounds/tom.wav");

const playSound = (instrument) => {
    switch (instrument) {
      case 'kick':
        kick.play();
        break;
  
      case 'clap':
        clap.play();
        break;
  
      case 'hihat':
        hihat.play();
        break;
  
      case 'ride':
        ride.play();
        break;
  
      case 'openhat':
        openhat.play();
        break;
  
      case 'snare':
        snare.play();
        break;
  
      case 'tink':
        tink.play();
        break;
  
      case 'tom':
        tom.play();
        break;
    }
  }

const volumeSlider = document.getElementById("volumeslider");

volumeSlider.addEventListener("input", function() {
  kick.volume = volumeSlider.value / 100;
  clap.volume = volumeSlider.value / 100;
  hihat.volume = volumeSlider.value / 100;
  ride.volume = volumeSlider.value / 100;
  openhat.volume = volumeSlider.value / 100;
  snare.volume = volumeSlider.value / 100;
  tink.volume = volumeSlider.value / 100;
  tom.volume = volumeSlider.value / 100;
});
