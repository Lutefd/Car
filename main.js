const canvas = document.getElementById(`myCanvas`);
canvas.widht = 200;

const ctx = canvas.getContext('2d');
const car = new Car(100, 100, 30, 50);
animate();
let lastTime = 0;
function animate() {
  car.update();
  canvas.height = window.innerHeight;
  car.draw(ctx);
  requestAnimationFrame(animate);
}
