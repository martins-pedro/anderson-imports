let count = 1;
document.getElementById("radio-image1").checked = true;

setInterval(function () {
  nextImage();
}, 2000);

function nextImage() {
  count++;
  if (count > 5) {
    count = 1;
  }

  document.getElementById("radio-image" + count).checked = true;
}
