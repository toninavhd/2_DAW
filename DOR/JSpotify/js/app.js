// Configuración de las canciones
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

let currentIndex = null;      // Índice de la canción actual
let audioElements = [];       // Array con { audio, item, vinyl, cover }

const playerTitle = document.querySelector(".player-title");
const playerArtist = document.querySelector(".player-artist");
const playerCoverThumb = document.querySelector(".player-cover-thumb");
const playerToggle = document.querySelector(".player-toggle");
const playerIcon = playerToggle.querySelector(".icon");
const currentTimeEl = document.querySelector(".current-time");
const totalTimeEl = document.querySelector(".total-time");
const progressBarInner = document.querySelector(".progress-bar-inner");

// Funciones auxiliares

function formatTime(seconds) {
  if (isNaN(seconds)) return "0:00";
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

songs.forEach(config => {
    const item = document.querySelector(config.itemSelector);
    const cover = item.querySelector(".cover");
    const vinyl = item.querySelector(".vinyl");
    const audio = new Audio(config.audioPath);

    audioElements.push({ audio, item, vinyl, cover });

    item.addEventListener("click", () => {

        // pausa todas las demás
        audioElements.forEach(el => {
            if (el.audio !== audio) el.audio.pause();
        });

        // toggle play / pause
        if (audio.paused) {
            audio.play();
            cover.classList.add("glow");
            vinyl.classList.add("playing");
        } else {
            audio.pause();
            cover.classList.remove("glow");
            vinyl.classList.remove("playing");
        }
    });
});
