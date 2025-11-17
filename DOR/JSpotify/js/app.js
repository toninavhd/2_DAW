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
            cover.classList.add("open");
            vinyl.classList.add("playing");
        } else {
            audio.pause();
            cover.classList.remove("open");
            vinyl.classList.remove("playing");
        }
    });
});
