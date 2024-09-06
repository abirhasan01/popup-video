// @ts-nocheck
var video = document.querySelector("video");
function toggle() {
  var trailer = document.querySelector(".trailer");
  trailer.style.visibility = "visible";
  trailer.style.opacity = "1";
  video.play();
  video.currentTime = 0;
}

function closeTrailer() {
  var trailer = document.querySelector(".trailer");
  trailer.style.visibility = "hidden";
  trailer.style.opacity = "0";
  video.pause();
}
