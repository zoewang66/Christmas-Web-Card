function toggleAudio() {
  let audioPlayer = document.getElementById("myAudio");

  // If audio is paused, play it; otherwise, pause it
  if (audioPlayer.paused) {
    audioPlayer.play();
  } else {
    audioPlayer.pause();
  }
}

const elemCard = document.querySelector("div.card");
const elemClickIcon = document.querySelector("span.click-icon");
elemCard.addEventListener("click", function () {
  elemCard.classList.toggle("is-opened");
  elemClickIcon.classList.toggle("is-hidden");
});
