// Configuración de las canciones
// con las rutas relativas
const songs = [
    {
        itemSelector: ".item-1",
        audioPath: "assets/songs/song1.mp3",
    },
    {
        itemSelector: ".item-2",
        audioPath: "assets/songs/song2.mp3",
    },
    {
        itemSelector: ".item-3",
        audioPath: "assets/songs/song3.mp3",
    },
];

//inicializamos las variables 
let currentIndex = null;  
// aqui guardamos la información del audio    
let audioElements = [];      


//elementos de la barra inferior se guardan aqui para mostrarse mas adelante. Usa querySelector
const playerTitle = document.querySelector(".player-title");
const playerArtist = document.querySelector(".player-artist");
const playerCoverThumb = document.querySelector(".player-cover-thumb");
const playerToggle = document.querySelector(".player-toggle");
const playerIcon = playerToggle.querySelector(".icon");
const currentTimeEl = document.querySelector(".current-time");
const totalTimeEl = document.querySelector(".total-time");
const progressBarInner = document.querySelector(".progress-bar-inner");

//funcion del tiempo
function formatTime(seconds) {
  if (isNaN(seconds)) return "0:00"; //si seconds no es valido es 0.00
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function updateNowPlaying(index) {
  const item = document.querySelector(songs[index].itemSelector);
  const title = item.dataset.title || "Sin título";
  const artist = item.dataset.artist || "Desconocido";
  const cover = item.dataset.cover || "";

  playerTitle.textContent = title;
  playerArtist.textContent = artist;
  if (cover) {
    playerCoverThumb.style.backgroundImage = `url('${cover}')`;
  }
}

function setPlayIcon(playing) {
  playerIcon.className = "icon";
  if (playing) {
    playerIcon.classList.add("icon-pause");
  } else {
    playerIcon.classList.add("icon-play");
  }
}

function pauseAll() {
  audioElements.forEach(({ audio, item, vinyl, cover }) => {
    audio.pause();
    item.classList.remove("active");
    vinyl.classList.remove("playing");
    cover.classList.remove("glow");
  });
  setPlayIcon(false);
}

songs.forEach((songConfig, index) => {
    const item = document.querySelector(songConfig.itemSelector);
    const cover = item.querySelector(".cover");
    const vinyl = item.querySelector(".vinyl");
    const audio = new Audio(songConfig.audioPath);

    audioElements.push({ audio, item, vinyl, cover });

    audio.addEventListener('loadedmetadata', () => {
        totalTimeEl.textContent = formatTime(audio.duration);
    });

    audio.addEventListener('timeupdate', () => {
        currentTimeEl.textContent = formatTime(audio.currentTime);
        totalTimeEl.textContent = formatTime(audio.duration);
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBarInner.style.width = `${progress}%`;
    });

    audio.addEventListener('ended', () => {
        item.classList.remove("active");
        vinyl.classList.remove("playing");
        cover.classList.remove("glow");
        setPlayIcon(false);
        progressBarInner.style.width = '0%';
    });

    item.addEventListener("click", () => {
        if (currentIndex !== index) {
            currentIndex = index;
            updateNowPlaying(index);
        }

        if (audio.paused) {
            pauseAll();
            audio.play();
            item.classList.add("active");
            vinyl.classList.add("playing");
            cover.classList.add("glow");
            setPlayIcon(true);
        } else {
            audio.pause();
            item.classList.remove("active");
            vinyl.classList.remove("playing");
            cover.classList.remove("glow");
            setPlayIcon(false);
        }
    });
});

playerToggle.addEventListener("click", () => {
    if (currentIndex === null) {
        currentIndex = 0;
        updateNowPlaying(0);
    }

    const { audio, item, vinyl, cover } = audioElements[currentIndex];

    if (audio.paused) {
        pauseAll();
        audio.play();
        item.classList.add("active");
        vinyl.classList.add("playing");
        cover.classList.add("glow");
        setPlayIcon(true);
    } else {
        audio.pause();
        item.classList.remove("active");
        vinyl.classList.remove("playing");
        cover.classList.remove("glow");
        setPlayIcon(false);
    }
});
