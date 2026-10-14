let video = document.querySelector("#myVideo");
let progressTab = document.querySelector("#progressTab");
let playPauseBtn = document.querySelector("#playPauseBtn");
let volumeInput = document.querySelector("#volumeInput");
let speedSelector = document.querySelector("#playbackSpeed");
let rewind = document.querySelector("#rewind");
let playForward = document.querySelector("#forward");

//progress functinalitty
function handleProgressUpdate() {
  const percentage = (video.currentTime / video.duration) * 100;
  progressTab.value = percentage;
}
let progressClick = 0;
video.addEventListener("timeupdate", handleProgressUpdate);
progressTab.addEventListener("click", () => {});

//play pause functionality
playPauseBtn.addEventListener("click", (event) => {
  // console.log(playPauseBtn.textContent);
  event.preventDefault();
  if (playPauseBtn.textContent === "▶ Play") {
    video.play();
    playPauseBtn.textContent = "❚ ❚ Pause";
  } else {
    video.pause();
    playPauseBtn.textContent = "▶ Play";
  }
});

//volume functionality
function updateVolume() {
  video.volume = volumeInput.value / 100;
  console.log(video.volume);
}
volumeInput.addEventListener("input", updateVolume);

//playback speed functionality
function updatePlaybackSpeed() {
  video.playbackRate = Number(speedSelector.value);
}
speedSelector.addEventListener("input", updatePlaybackSpeed);

//rewind functionality
function replay() {
  video.currentTime -= 10;
}
rewind.addEventListener("click", replay);

//play forward functionality
function increaseSpeed() {
  video.currentTime -= 10;
}
playForward.addEventListener("click", increaseSpeed);
