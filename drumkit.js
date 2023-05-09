// Strict Mode
"use strict";

const soundList = [
    document.getElementById("kick"),
    document.getElementById("clap"),
    document.getElementById("hihat"),
    document.getElementById("ride"),
];

const playKick = () => {
    for (let i = 0 ; i < soundList.length ; i++) {
        if (soundList[i].id === "kick") {
            let kickAudio = new Audio('sounds/kick.wav');
            kickAudio.play();
        }
    };
};

const playClap = () => {
    for (let i = 0 ; i < soundList.length ; i++) {
        if (soundList[i].id === "kick") {
            let clapAudio = new Audio('sounds/clap.wav');
            clapAudio.play();
        }
    };
};

const playHihat = () => {
    for (let i = 0 ; i < soundList.length ; i++) {
        if (soundList[i].id === "kick") {
            let hihatAudio = new Audio('sounds/hihat.wav');
            hihatAudio.play();
        }
    };
};

const playRide = () => {
    for (let i = 0 ; i < soundList.length ; i++) {
        if (soundList[i].id === "kick") {
            let rideAudio = new Audio('sounds/ride.wav');
            rideAudio.play();
        }
    };
};
