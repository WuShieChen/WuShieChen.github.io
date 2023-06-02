var images = document.querySelectorAll('.slideshow img');
var currentImage = 0;

function nextImage() {
  images[currentImage].className = '';
  currentImage = (currentImage + 1) % images.length;
  images[currentImage].className = 'active';
}

setInterval(nextImage, 1500); 