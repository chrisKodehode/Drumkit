// Strict Mode
"use strict";

const soundList = [
    document.getElementById("kick"),
    document.getElementById("clap"),
    document.getElementById("hihat"),
    document.getElementById("ride"),
    document.getElementById("openhat"),
    document.getElementById("snare"),
    document.getElementById("tink"),
    document.getElementById("tom")
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
        if (soundList[i].id === "clap") {
            let clapAudio = new Audio('sounds/clap.wav');
            clapAudio.play();
        }
    };
};

const playHihat = () => {
    for (let i = 0 ; i < soundList.length ; i++) {
        if (soundList[i].id === "hihat") {
            let hihatAudio = new Audio('sounds/hihat.wav');
            hihatAudio.play();
        }
    };
};

const playRide = () => {
    for (let i = 0 ; i < soundList.length ; i++) {
        if (soundList[i].id === "ride") {
            let rideAudio = new Audio('sounds/ride.wav');
            rideAudio.play();
        }
    };
};

const playOpenhat = () => {
    for (let i = 0 ; i < soundList.length ; i++) {
        if (soundList[i].id === "openhat") {
            let openhatAudio = new Audio('sounds/openhat.wav');
            openhatAudio.play();
        }
    };
};

const playSnare = () => {
    for (let i = 0 ; i < soundList.length ; i++) {
        if (soundList[i].id === "snare") {
            let snareAudio = new Audio('sounds/snare.wav');
            snareAudio.play();
        }
    };
};

const playTink = () => {
    for (let i = 0 ; i < soundList.length ; i++) {
        if (soundList[i].id === "tink") {
            let tinkAudio = new Audio('sounds/tink.wav');
            tinkAudio.play();
        }
    };
};

const playTom = () => {
    for (let i = 0 ; i < soundList.length ; i++) {
        if (soundList[i].id === "tom") {
            let tomAudio = new Audio('sounds/tom.wav');
            tomAudio.play();
        }
    };
};