// Strict Mode
"use strict";

const kick = new Audio("sounds/kick.wav");
const clap = new Audio("sounds/clap.wav");
const hihat = new Audio("sounds/hihat.wav");
const ride = new Audio("sounds/ride.wav");
const openhat = new Audio("sounds/openhat.wav");
const snare = new Audio("sounds/snare.wav");
const tink = new Audio("sounds/tink.wav");
const tom = new Audio("sounds/tom.wav");

function playKick() {
  kick.currentTime = 0;
  kick.play();
}

function playClap() {
  clap.currentTime = 0;
  clap.play();
}

function playHihat() {
  hihat.currentTime = 0;
  hihat.play();
}

function playRide() {
  ride.currentTime = 0;
  ride.play();
}

function playOpenhat() {
  openhat.currentTime = 0;
  openhat.play();
}

function playSnare() {
  snare.currentTime = 0;
  snare.play();
}

function playTink() {
  tink.currentTime = 0;
  tink.play();
}

function playTom() {
  tom.currentTime = 0;
  tom.play();
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
