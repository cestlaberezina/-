// static/js/random-gradient.js

// Generate random edge position for the gradient center
function getRandomPosition() {
  const edge = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left
  let x, y;

  switch (edge) {
    case 0: // Top edge
      x = Math.random() * 100 + '%';
      y = '0%';
      break;
    case 1: // Right edge
      x = '100%';
      y = Math.random() * 100 + '%';
      break;
    case 2: // Bottom edge
      x = Math.random() * 100 + '%';
      y = '100%';
      break;
    case 3: // Left edge
      x = '0%';
      y = Math.random() * 100 + '%';
      break;
  }
  return `${x} ${y}`;
}

// Set the radial gradient with random center position
function setRandomGradient() {
  const position = getRandomPosition();
  const colors = [
    '#ff7e5f',
    '#feb47b',
    '#6a11cb',
    '#2575fc'
  ]; // Example gradient colors
  const gradient = `radial-gradient(circle at ${position}, ${colors[0]}, ${colors[1]}, ${colors[2]}, ${colors[3]})`;

  const backgroundElement = document.getElementById('background');
  backgroundElement.style.background = gradient;
}

// Initialize the gradient on page load
setRandomGradient();
