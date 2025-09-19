window.addEventListener("load", () => {
  document.getElementById("preloader").style.display = "none";
  document.getElementById("main").style.display = "flex";

  //Adicionar peixes
  const aquarium = document.getElementById("Aquarium");
  const fishes = document.querySelectorAll(".navFish");

  fishes.forEach((fish) => {
    fish.addEventListener("click", () => {
      const newFish = document.createElement("img");
      newFish.src = fish.src;
      newFish.classList.add("fish");

      // Tamanho aleatório
      const size = 30 + Math.random() * 70;
      newFish.style.width = `${size}px`;

      // Posição inicial
      let x = Math.random() * (aquarium.clientWidth - size);
      let y = Math.random() * (aquarium.clientHeight - size);
      newFish.style.left = `${x}px`;
      newFish.style.top = `${y}px`;

      aquarium.appendChild(newFish);

      // Nadar
      function swim() {
        const maxLeft = aquarium.clientWidth - size;
        const maxTop = aquarium.clientHeight - size;

        const newX = Math.random() * maxLeft;
        const newY = Math.random() * maxTop;

        // Vira para o lado certo
        if (newX < x) {
          newFish.style.transform = "scaleX(-1)";
        } else {
          newFish.style.transform = "scaleX(1)";
        }

        newFish.style.left = `${newX}px`;
        newFish.style.top = `${newY}px`;

        x = newX;
        y = newY;
      }

      swim();

      // Continua nadando a cada 2s
      setInterval(swim, 2000);
    });
  });

  //Apaga todos peixes
  const reset = document.getElementById("resetBtn");
  reset.addEventListener("click", () => {
    document.querySelectorAll("#Aquarium .fish").forEach((f) => f.remove());
  });
});
