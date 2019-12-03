document.getElementById('change').addEventListener('click', changeColor);

function changeColor(e) {
  const body = document.body;
  color1 = getRndInteger(1, 300);
  color2 = getRndInteger(1, 300);
  color3 = getRndInteger(1, 300);
  body.style.backgroundColor = `rgb(${color1},${color2},${color3})`;
  const rgb = document.getElementById('value');
  rgb.innerHTML = `<h6>rgb(${color1},${color2},${color3})</h6>`;
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}