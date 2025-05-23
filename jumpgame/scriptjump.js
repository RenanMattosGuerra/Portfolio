const startButton = document.getElementById("start");
const cat = document.getElementById("cat");
const jumpCat = document.getElementById("jumpcat");
const snake = document.getElementById("snake");
const clickPage = document.getElementById("page");
const over = document.getElementById("gameover");
const restart = document.getElementById("restart");
const level = document.getElementById("level");
const win = document.getElementById("winner");
const section = document.getElementById("sect");

//Animação de pular
setTimeout(jump, 15);
function jump() {
  clickPage.addEventListener("click", () => {
    cat.style.display = "none";
    jumpCat.style.display = "block";
    jumpCat.classList.add("catjump");
    setTimeout(walk, 510);
    function walk() {
      jumpCat.style.display = "none";
      cat.style.display = "block";
    }
  });
}

//Início do jogo
startButton.addEventListener("click", () => {
  snake.classList.add("snakemove");
  startButton.style.backgroundColor = "crimson";
  //Passando de nível
  setTimeout(run, 15150);
  function run() {
    snake.classList.remove("snakemove");
    snake.classList.add("snakemovefaster");
    level.innerText = "Nível 2";
    level.style.color = "rgb(255, 255, 111)";
    level.style.fontSize = "2.2em";
  }
  setTimeout(run2, 30000);
  function run2() {
    snake.classList.remove("snakemovefaster");
    snake.classList.add("snakemoveevenfaster");
    level.innerText = "Nível 3";
    level.style.color = "orange";
    level.style.fontSize = "2.6em";
  }
  setTimeout(run3, 45000);
  function run3() {
    snake.classList.remove("snakemoveevenfaster");
    snake.classList.add("snakemovesuperfast");
    level.innerText = "Nível 4";
    level.style.color = "darkred";
    level.style.fontSize = "3em";
  }

  //Vitória
  setTimeout(win, 56400);
  function win() {
    if (over.style.display !== "flex") {
      clearInterval(checkDead);
      winner.style.display = "flex";
      snake.style.display = "none";
      section.style.display = "none";
    }
  }

  //Game over?
  let checkDead = setInterval(function () {
    let snakeLeft = parseInt(
      window.getComputedStyle(snake).getPropertyValue("left")
    );
    let catTop = 0;
    if (window.getComputedStyle(jumpCat).display !== "none") {
      catTop = parseInt(
        window.getComputedStyle(jumpCat).getPropertyValue("top")
      );
    }
    if (snakeLeft <= 70 && snakeLeft > 0 && cat.style.display == "block") {
      clearInterval(checkDead);
      over.style.display = "flex";
      section.style.display = "none";
      alert("Você Perdeu!");
    }
    if (
      snakeLeft <= 70 &&
      snakeLeft > 0 &&
      cat.style.display == "none" &&
      catTop >= 690
    ) {
      clearInterval(checkDead);
      over.style.display = "flex";
      section.style.display = "none";
      alert("Você Perdeu!");
    }
  }, 10);
});

// Restart game
restart.addEventListener("click", () => {
  location.reload();
});

//Cursor de gato
const cursor = document.getElementById("cursor");

clickPage.addEventListener("click", () => {
  cursor.style.display = "flex";
  setTimeout(disaappear, 500);
  function disaappear() {
    cursor.style.display = "none";
  }
});

document.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;

  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
});
