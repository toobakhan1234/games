const basket = document.getElementById('basket');
const ball = document.getElementById('ball');
const scoreDisplay = document.getElementById('score');
let score = 0;
let basketPosition = 160;
let ballPositionX = Math.floor(Math.random() * 380);
let ballPositionY = 0;
let ballSpeed = 2;
let gameInterval;

document.addEventListener('keydown', moveBasket);

function moveBasket(e) {
  if (e.key === 'ArrowLeft' && basketPosition > 0) {
    basketPosition -= 20;
  } else if (e.key === 'ArrowRight' && basketPosition < 320) {
    basketPosition += 20;
  }
  basket.style.left = `${basketPosition}px`;
}

function dropBall() {
  ballPositionY += ballSpeed;
  ball.style.top = `${ballPositionY}px`;
  ball.style.left = `${ballPositionX}px`;

  if (ballPositionY > 580) {
    if (ballPositionX >= basketPosition && ballPositionX <= basketPosition + 80) {
      score++;
      scoreDisplay.textContent = `Score: ${score}`;
      resetBall();
    } else {
      clearInterval(gameInterval);
      alert('Game Over! Your score is: ' + score);
    }
  }
}

function resetBall() {
  ballPositionY = 0;
  ballPositionX = Math.floor(Math.random() * 380);
}

function startGame() {
  gameInterval = setInterval(dropBall, 20);
}

window.onload = startGame;
