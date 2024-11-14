// Example play/pause control
document.getElementById('playPauseButton').addEventListener('click', function() {
  let audioPlayer = document.getElementById('audioPlayer');
  if (audioPlayer.paused) {
    audioPlayer.play();
    this.innerHTML = "Pause";
  } else {
    audioPlayer.pause();
    this.innerHTML = "Play";
  }
});
