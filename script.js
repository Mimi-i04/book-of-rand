const musicBtn = document.getElementById('music-btn');
const bgMusic = document.getElementById('bg-music');
let playing = false;

musicBtn.addEventListener('click', () => {
  if (!playing) {
    bgMusic.play();
    musicBtn.textContent = 'Pause 🎶';
  } else {
    bgMusic.pause();
    musicBtn.textContent = 'Play Birthday Tune 🎶';
  }
  playing = !playing;
});

function createBinary() {
  const anim = document.getElementById('animation');
  const span = document.createElement('span');
  span.className = 'binary';
  span.textContent = Math.random() > 0.5 ? '0' : '1';
  span.style.left = Math.random() * 100 + 'vw';
  anim.appendChild(span);
  setTimeout(() => span.remove(), 5000);
}

setInterval(createBinary, 150);