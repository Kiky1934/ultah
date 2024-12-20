// Set the date we're counting down to (25 Januari 2025, 10:00:00 WIB)
var countDownDate = new Date("Jan 25, 2025 16:00:00 GMT+0700").getTime(); // WIB = GMT+7

// Update the countdown every 1 second
var x = setInterval(function() {
  
  // Get the current date and time
  var now = new Date().getTime();
  
  // Find the distance between now and the countdown date
  var distance = countDownDate - now;
  
  // Time calculations for days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Update the countdown display
  document.getElementById("days-text").innerHTML = days;
  document.getElementById("hours-text").innerHTML = hours;
  document.getElementById("minutes-text").innerHTML = minutes;
  document.getElementById("seconds-text").innerHTML = seconds;
  
  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days-text").innerHTML = "0";
    document.getElementById("hours-text").innerHTML = "0";
    document.getElementById("minutes-text").innerHTML = "0";
    document.getElementById("seconds-text").innerHTML = "0";
    document.getElementById("countdown").innerHTML = "Pernikahan telah dimulai!";
  }
}, 1000);
// JavaScript untuk Play/Pause
const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const playIcon = document.querySelector('.play-pause-btn i');

playPauseBtn.addEventListener('click', function() {
  if (audio.paused) {
    audio.play();
    playIcon.classList.remove('fa-play');
    playIcon.classList.add('fa-pause'); // Ganti ikon ke Pause
  } else {
    audio.pause();
    playIcon.classList.remove('fa-pause');
    playIcon.classList.add('fa-play'); // Ganti ikon ke Play
  }
});
