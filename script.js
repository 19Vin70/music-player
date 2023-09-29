document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("audio");
const playPauseButton = document.getElementById("play-pause");
const volumeControl = document.getElementById("volume");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentSong = 0;
const songs = [
    "vm.mp3",
    "Bee_Sound_Effect(128k).m4a",
];

function playSong(songIndex) {
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    } else if (songIndex >= songs.length) {
        songIndex = 0;
    }

    audio.src = songs[songIndex];
    audio.play();
    currentSong = songIndex;
    playPauseButton.innerText = "Pause";
}

playPauseButton.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
        playPauseButton.innerText = "Pause";
    } else {
        audio.pause();
        playPauseButton.innerText = "Play";
    }
});

prevButton.addEventListener("click", function () {
    currentSong--;
    playSong(currentSong);
});

nextButton.addEventListener("click", function () {
    currentSong++;
    playSong(currentSong);
});

volumeControl.addEventListener("input", function () {
    audio.volume = volumeControl.value;
});

audio.addEventListener("ended", function () {
    currentSong++;
    playSong(currentSong);
});

playSong(currentSong);

})