// Get Elements
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

// Build functions

function togglePlay() {
  const method = video.pause ? "play" : "pause";
  video[method]();
  if (video.pause) {
    video.play();
  } else {
    video.pause();
  }
}

// Hook up eventListeners
