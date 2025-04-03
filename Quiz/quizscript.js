const answers = Array.from(document.getElementsByClassName("answers"));
const wrong = document.querySelectorAll(".wrong");
const right = document.querySelectorAll(".right");
let rightCount = 0;
const button = document.getElementById("btn");
let buttonClick = 0;
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const end = document.getElementById("fim");
const result = document.getElementById("resultado");

//Ativar botão para próxima pergunta e retirar possibilidade de clicar em mais de uma resposta
answers.forEach((element) => {
  element.addEventListener("click", () => {
    button.style.visibility = "visible";
    answers.forEach((e) => {
      e.style.pointerEvents = "none";
    });
  });
});

//Fundo vermelho para respostas erradas
wrong.forEach((element) => {
  element.addEventListener("click", () => {
    element.style.backgroundColor = "red";
  });
});

//Fundo verde para respostas certas e contagem de acertos para exibir no resultado
right.forEach((element) => {
  element.addEventListener("click", () => {
    element.style.backgroundColor = "green";
    rightCount++;
    if (rightCount == 1) {
      result.innerHTML = "Você acertou 1/4";
    }
    if (rightCount == 2) {
      result.innerHTML = "Você acertou 2/4";
    }
    if (rightCount == 3) {
      result.innerHTML = "Você acertou 3/4";
    }
    if (rightCount == 4) {
      result.innerHTML = "Você acertou 4/4";
    }
  });
});

//Botão para próximas perguntas e resultado final
button.addEventListener("click", () => {
  buttonClick++;
  one.style.display = "none";
  two.style.display = "flex";
  button.style.visibility = "hidden";

  answers.forEach((e) => {
    e.style.pointerEvents = "auto";
  });

  if (buttonClick == 2) {
    two.style.display = "none";
    three.style.display = "flex";
  }
  if (buttonClick == 3) {
    two.style.display = "none";
    three.style.display = "none";
    four.style.display = "flex";
    button.innerHTML = "Resultado";
  }
  if (buttonClick == 4) {
    two.style.display = "none";
    three.scroll.display = "none";
    four.style.display = "none";
    button.style.visibility = "hidden";
    end.style.display = "block";
    result.style.display = "block";
  }
});
