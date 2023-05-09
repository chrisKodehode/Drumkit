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

// Declare a constant Object with instrument name and file path for the sound
const instruments = {
    kick: "sounds/kick.wav",
    clap: "sounds/clap.wav",
    hihat: "sounds/hihat.wav",
    ride: "sounds/ride.wav",
    openhat: "sounds/openhat.wav",
    snare: "sounds/snare.wav",
    tink: "sounds/tink.wav",
    tom: "sounds/tom.wav"
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
