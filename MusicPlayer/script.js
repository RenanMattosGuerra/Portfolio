window.addEventListener("DOMContentLoaded", () => {
  //Músicas

  const songs = [
    {
      title: "FreePD - Arpent",
      file: "songs/Arpent.wav",
      img: "images/arpent.webp",
    },

    {
      title: "FreePD - Stereotype News",
      file: "songs/Stereotype News.wav",
      img: "images/stereotypenews.webp",
    },
    {
      title: "FreePD - Witch Waltz",
      file: "songs/Witch Waltz.wav",
      img: "images/witchwaltz.webp",
    },
    {
      title: "FreePD - Bar Brawl",
      file: "songs/Bar Brawl.wav",
      img: "images/barbrawl.webp",
    },
    {
      title: "FreePD - Meditating Beat",
      file: "songs/Meditating Beat.wav",
      img: "images/meditatingbeat.webp",
    },
  ];

  //Atualizar dados de acordo com a música atual

  let currentIndex = 0;

  const imgContainer = document.getElementById("img");
  const musicplayer = document.getElementById("musicplayer");
  const songTitle = document.getElementById("songTitle");

  let music = document.createElement("audio");

  let img = document.createElement("img");
  img.style.width = "90%";
  img.style.borderRadius = "25px";
  img.style.border = "2px solid #000000";
  img.style.boxShadow = "2px 2px 5px ";
  img.style.border = "5px solid var(--yellow)";

  function loadSong(index) {
    music.src = songs[index].file;
    img.src = songs[index].img;
    music.setAttribute("title", songs[index].title);
    songTitle.textContent = `♫ ${songs[index].title} ♫`;
  }

  loadSong(currentIndex);
  musicplayer.appendChild(music);
  imgContainer.appendChild(img);

  //Barra de progresso

  let musicBar = document.getElementById("progress");

  music.onloadedmetadata = function () {
    musicBar.max = music.duration;
    musicBar.value = music.currentTime;
  };

  music.addEventListener("timeupdate", () => {
    musicBar.value = music.currentTime;
  });

  musicBar.addEventListener("input", () => {
    music.currentTime = musicBar.value;
  });

  //Botões de controle

  const controls = document.getElementById("controls");

  let nextButton = document.createElement("button");
  nextButton.innerHTML = `<i class="fa-solid fa-forward-step fa-lg"></i>`;
  nextButton.classList.add("nextSong");
  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % songs.length;
    loadSong(currentIndex);
    playButton.innerHTML = `<i class="fa-solid fa-play fa-lg"></i>`;
  });

  let playButton = document.createElement("button");
  playButton.innerHTML = `<i class="fa-solid fa-play fa-lg"></i>`;
  playButton.classList.add("playButton");
  playButton.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      playButton.innerHTML = `<i class="fa-solid fa-pause fa-lg"></i>`;
    } else {
      music.pause();
      playButton.innerHTML = `<i class="fa-solid fa-play fa-lg"></i>`;
    }
  });

  let previousButton = document.createElement("button");
  previousButton.innerHTML = `<i class="fa-solid fa-forward-step fa-flip-horizontal fa-lg"></i>`;
  previousButton.classList.add("nextSong");
  previousButton.addEventListener("click", () => {
    if (currentIndex != 0) {
      currentIndex = currentIndex - 1;
    }
    playButton.innerHTML = `<i class="fa-solid fa-play fa-lg"></i>`;
    loadSong(currentIndex);
  });

  controls.appendChild(previousButton);
  controls.appendChild(playButton);
  controls.appendChild(nextButton);

  //Animação durante a música

  const player = document.getElementById("main");

  music.addEventListener("play", () => {
    player.classList.add("playAnimation");
  });
  music.addEventListener("pause", () => {
    player.classList.remove("playAnimation");
  });
  music.addEventListener("ended", () => {
    player.classList.remove("playAnimation");
    playButton.innerHTML = `<i class="fa-solid fa-play fa-lg"></i>`;
  });
  nextButton.addEventListener("click", () => {
    player.classList.remove("playAnimation");
  });
  previousButton.addEventListener("click", () => {
    player.classList.remove("playAnimation");
  });

  //Botão de volume
  let volumeSlider = document.getElementById("volume");
  volumeSlider.min = 0;
  volumeSlider.max = 1;
  volumeSlider.step = 0.01;

  volumeSlider.addEventListener("input", () => {
    music.volume = volumeSlider.value;
  });
});
